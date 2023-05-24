import { useState } from "react";

import { useExercise } from "stores";

export function useWorkoutForm(scheduleDay?: any) {
  const { exercises } = useExercise();

  const [isEditMode, setEditMode] = useState<boolean>(false);

  const makeExerciseOptions = () => exercises.map(({ id, title }) => ({
    label: title,
    value: id,
  }));

  const handleChangeEditMode = () => setEditMode(!isEditMode);

  return {
    isEditMode,
    exerciseOptions: makeExerciseOptions(),
    handleChangeEditMode,
  };
}
