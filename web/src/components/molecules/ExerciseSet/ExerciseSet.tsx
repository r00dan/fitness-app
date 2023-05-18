import { TEMPORARY_ISet } from "../AddWorkoutForm/useWorkoutForm";

import style from './ExerciseSet.module.scss';

interface IExerciseSet {
  requiredSets: TEMPORARY_ISet[];
}

export function ExerciseSet({
  requiredSets,
}: IExerciseSet) {
  return (
    <div className={style.root}>
      {requiredSets.map(({ repeats, weight }, index) => (
        <div key={index} className={style.setWrapper}>
          <div>{index + 1}. Repeats: {repeats} | Weight: {weight}</div>
        </div>
      ))}
    </div>
  )
}
