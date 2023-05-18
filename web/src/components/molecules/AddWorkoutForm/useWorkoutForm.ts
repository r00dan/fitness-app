import { useState, useEffect, ChangeEvent } from "react";

import { Endpoint, Method, useFetch } from "hooks";
import { SingleOptionType } from "molecules";

import { ExerciseData, WorkoutExerciseData, WorkoutSetData } from 'shared-types';

interface IWorkoutExercise extends Pick<WorkoutExerciseData, 'requiredSets' | 'doneSets' | 'description'> {
  id?: string;
  title?: string;
}

const newExerciseTemplate: IWorkoutExercise = {
  id: undefined,
  title: undefined,
  description: undefined,
  requiredSets: [],
  doneSets: [],
};

const newSetTemplate: WorkoutSetData = {
  repeats: 0,
  weight: 0,
};

export function useWorkoutForm() {
  const {
    data: exercisesData,
  } = useFetch<ExerciseData[]>(
    Endpoint.EXERCISE,
    Method.GET
    );

  const [selectedNewExercise, setSelectedNewExercise] = useState<SingleOptionType>();
  const [requiredSets, setRequiredSet] = useState<WorkoutSetData[]>([]);
  const [exercises, setExercises] = useState<ExerciseData[]>([]);
  const [workoutExercises, setWorkoutExercises] = useState<WorkoutExerciseData[]>([]);
  const [newExercise, setNewExercise] = useState<IWorkoutExercise>(newExerciseTemplate);
  const [newSet, setNewSet] = useState<WorkoutSetData>(newSetTemplate);

  const makeExerciseOptions = () => exercises.map(({ id, title }) => ({
    label: title,
    value: id,
  }));

  const handleAddExerciseButtonClick = () => {
    setWorkoutExercises((prevState) => ([...prevState, {
      ...newExercise,
      id: newExercise.id!,
      title: newExercise.title!,
    }]));

    setNewExercise(newExerciseTemplate);
  }

  const handleAddSetButtonClick = () => {
    setNewExercise((prevState) => ({ ...prevState, requiredSets: [...prevState.requiredSets, newSet] }));
    setNewSet(newSetTemplate);
  };

  const handleChangeNewExerciseSelect = (newValue: SingleOptionType) => setSelectedNewExercise(newValue);

  const handleNewSetRepeatsChange = (value: number) =>
    setNewSet((prevState) => ({ ...prevState, repeats: value }));
  const handleNewSetWeightChange = (value: number) =>
    setNewSet((prevState) => ({ ...prevState, weight: value }));
  
  useEffect(() => {
    setNewExercise((prevState) => ({
      ...prevState,
      id: selectedNewExercise?.value,
      title: selectedNewExercise?.label,
    }));
  }, [selectedNewExercise]);

  useEffect(() => {
    if (exercisesData) {
      setExercises(exercisesData);
    }
  }, [exercisesData]);

  return {
    newExercise,
    newSet,
    selectedNewExercise,
    requiredSets,
    workoutExercises,
    exerciseOptions: makeExerciseOptions(),
    handleAddExerciseButtonClick,
    handleAddSetButtonClick,
    handleChangeNewExerciseSelect,
    handleNewSetRepeatsChange,
    handleNewSetWeightChange,
  };
}
