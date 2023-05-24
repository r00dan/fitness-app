import { WorkoutSetData } from 'shared-types';
import { useSettings } from 'hooks';
import { InputNumber } from 'atoms';

import style from './ExerciseSet.module.scss';

interface IExerciseSet {
  isEditMode: boolean;
  requiredSets: WorkoutSetData[];
  doneSets: WorkoutSetData[];
  onRequiredRepeatsChange(value: number, index: number): void;
  onRequiredWeightChange(value: number, index: number): void;
  onDoneRepeatsChange(value: number, index: number): void;
  onDoneWeightChange(value: number, index: number): void;
}

export function ExerciseSet({
  isEditMode,
  requiredSets,
  doneSets,
  onRequiredRepeatsChange,
  onRequiredWeightChange,
  onDoneRepeatsChange,
  onDoneWeightChange,
}: IExerciseSet) {
  const { unit } = useSettings();
  
  return (
    <div className={style.root}>
      <div>
        <div className={style.title}>Required: </div>
        {requiredSets.map(({ repeats, weight }, index) => (
          <div key={`required-row-${index}`} className={style.requiredRow}>
            <div>{index + 1}.</div>
            <InputNumber
              disabled={!isEditMode}
              before='Repeats'
              value={repeats}
              onChange={(value: number) => onRequiredRepeatsChange(value, index)}
            />
            <InputNumber
              disabled={!isEditMode}
              before='Weight'
              after={unit}
              value={weight}
              onChange={(value: number) => onRequiredWeightChange(value, index)}
            />
          </div>
        ))}
      </div>
      <div>
        <div className={style.title}>Done: </div>
        {doneSets.map(({ repeats, weight }, index) => (
          <div key={`done-row-${index}`} className={style.doneRow}>
            <InputNumber
              disabled={!isEditMode}
              before='Repeats'
              defaultValue={repeats}
              value={repeats}
              onChange={(value: number) => onDoneRepeatsChange(value, index)}
            />
            <InputNumber
              disabled={!isEditMode}
              before='Weight'
              after={unit}
              defaultValue={weight}
              value={weight}
              onChange={(value: number) => onDoneWeightChange(value, index)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
