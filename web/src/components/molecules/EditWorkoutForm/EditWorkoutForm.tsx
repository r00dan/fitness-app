/* eslint-disable @typescript-eslint/no-empty-function */
import { RiDeleteBinLine, RiEdit2Fill } from 'react-icons/ri'; 

import { ExerciseSet, Select } from "molecules";
import { Button, ButtonThemes, InputNumber } from "atoms";
import { useSettings } from 'hooks';
import { ScheduleStore } from 'stores';
import { useWorkoutForm } from "./useWorkoutForm";

import style from './EditWorkoutForm.module.scss';

interface EditWorkoutForm {
  scheduleDay?: ScheduleStore;
}

export function EditWorkoutForm({
  scheduleDay,
}: EditWorkoutForm) {
  const {
    isEditMode,
    schedule: { workout },
    exerciseOptions,

    newExercise,
    newSet,
    workoutExercises,
    selectedNewExercise,
    handleAddExerciseButtonClick,
    handleAddSetButtonClick,
    handleChangeNewExerciseSelect,
    handleNewSetRepeatsChange,
    handleNewSetWeightChange,
    handleEditModeClick,

    handleRequiredRepeatsChange,
    handleRequiredWeightChange,
    handleDoneRepeatsChange,
    handleDoneWeightChange,
  } = useWorkoutForm(scheduleDay);

  const { unit } = useSettings();
  
  return (
    <div className={style.root}>
      <Button
        theme={ButtonThemes.TRANSPARENT}
        onClick={handleEditModeClick}
      >
        Change to {isEditMode ? 'view' : 'edit'} mode
      </Button>
      <div className={style.workouts}>
        {workout.length
          ? workout.map(({ id, requiredSets, doneSets, title }, index) =>
            (
              <div className={style.workout} key={id}>
                <div>{index + 1}. {title}</div>
                <div className={style.exerciseSets}>
                  <ExerciseSet
                    isEditMode={isEditMode}
                    requiredSets={requiredSets}
                    doneSets={doneSets}
                    onRequiredRepeatsChange={handleRequiredRepeatsChange}
                    onRequiredWeightChange={handleRequiredWeightChange}
                    onDoneRepeatsChange={handleDoneRepeatsChange}
                    onDoneWeightChange={handleDoneWeightChange}
                  />
                </div>
              </div>
            ))
            : (
              <div>No workout yet</div>
          )
        }
      </div>
      {isEditMode && (
        <div>
          <div className={style.exerciseSelector}>
            <Select
              clearable
              options={exerciseOptions}
              onChange={handleChangeNewExerciseSelect}
            />
          </div>
          {selectedNewExercise && (
            <div className={style.sets}>
              {newExercise.requiredSets && (
                newExercise.requiredSets.map(({ repeats, weight }, index) => (
                  <div key={index} className={style.set}>
                    <div className={style.setIcon}>
                      <RiDeleteBinLine />
                    </div>
                    <div className={style.setIcon}>
                      <RiEdit2Fill />
                    </div>
                    <div>{index + 1}. </div>
                    <InputNumber
                      disabled
                      value={repeats}
                      before='Repeats'
                      onChange={() => { }}
                    />
                    <InputNumber
                      disabled
                      value={weight}
                      after={unit}
                      before='Weight'
                      onChange={() => { }}
                    />
                  </div>   
                ))
              )}
              <div className={style.setWrapper}>
                <div className={style.set}>
                  <div></div>
                  <div></div>
                  <div></div>
                  <InputNumber
                    value={newSet.repeats}
                    before='Repeats'
                    onChange={handleNewSetRepeatsChange}
                  />
                  <InputNumber
                    value={newSet.weight}
                    after={unit}
                    before='Weight'
                    onChange={handleNewSetWeightChange}
                  />
                </div>        
                <Button
                  isAddButton
                  className={style.addSetButton}
                  disabled={!selectedNewExercise}
                  onClick={handleAddSetButtonClick}
                />
              </div>
            </div>
          )}
        </div>
      )}
      <div className={style.actionButtons}>
        <div className={style.actionButton}>
          <Button
            disabled={!selectedNewExercise}
            onClick={handleAddExerciseButtonClick}
          >
            Add to workout
          </Button>
        </div>
        <div className={style.actionButton}>
          <Button
            theme={ButtonThemes.SECONDARY}
            onClick={() => { }}
          >
            Update workout
          </Button>
        </div>
        <div className={style.actionButton}>
          <Button
            theme={ButtonThemes.DANGER}
            onClick={() => { }}
          >
            Remove workout
          </Button>
        </div>
      </div>
    </div>
  )
}
