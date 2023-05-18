/* eslint-disable @typescript-eslint/no-empty-function */
import { RiDeleteBinLine, RiEdit2Fill } from 'react-icons/ri'; 

import { ExerciseSet, Select } from "molecules";
import { Button, InputNumber } from "atoms";
import { useWorkoutForm } from "./useWorkoutForm";

import style from './AddWorkoutForm.module.scss';

export function AddWorkoutForm() {
  const {
    newExercise,
    newSet,
    workoutExercises,
    selectedNewExercise,
    exerciseOptions,
    handleAddExerciseButtonClick,
    handleAddSetButtonClick,
    handleChangeNewExerciseSelect,
    handleNewSetRepeatsChange,
    handleNewSetWeightChange,
  } = useWorkoutForm();
  return (
    <div className={style.root}>
      <div className={style.workouts}>
        {workoutExercises.map(({ id, requiredSets, title }) => (
          <div className={style.workout} key={id}>
            <div>{title}</div>
            <ExerciseSet
              requiredSets={requiredSets}
            />
          </div>
        ))}
      </div>
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
                  after='kgs'
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
                after='kgs'
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
      <Button
        isAddButton
        disabled={!selectedNewExercise}
        onClick={handleAddExerciseButtonClick}
      />
    </div>
  )
}
