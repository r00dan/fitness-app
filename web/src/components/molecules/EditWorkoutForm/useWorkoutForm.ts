import { useState, useEffect } from "react";
import { nanoid } from "nanoid";


import { CreateScheduleDtoInput, WorkoutExerciseData, WorkoutSetData } from 'shared-types';
import { type ScheduleStore, useExercise, useUser } from "stores";
import { type OptionType } from "molecules";

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

const newScheduleDayTemplate: CreateScheduleDtoInput = {
  id: nanoid(),
  userId: '',
  workout: [],
  workoutDate: new Date().toISOString(),
};

export function useWorkoutForm(scheduleDay?: ScheduleStore) {
  const { exercises } = useExercise();
  const { user } = useUser();

  const [schedule, setSchedule] = useState<CreateScheduleDtoInput>(
    scheduleDay
      ? {
        userId: user.id!,
        id: scheduleDay?.id,
        workout: scheduleDay?.workout,
        workoutDate: scheduleDay?.workoutDate,
      }
      : {
        ...newScheduleDayTemplate,
        userId: user.id!,
      }
  );

  // const [workout, setWorkout] = useState<>();




  const [isEditMode, setEditMode] = useState<boolean>(false);
  const [selectedNewExercise, setSelectedNewExercise] = useState<OptionType>();
  const [requiredSets, setRequiredSet] = useState<WorkoutSetData[]>([]);

  const [workoutExercises, setWorkoutExercises] = useState<WorkoutExerciseData[]>(scheduleDay?.workout ?? []);
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

  const handleChangeNewExerciseSelect = (newValue: OptionType) => setSelectedNewExercise(newValue);

  const handleNewSetRepeatsChange = (value: number) =>
    setNewSet((prevState) => ({ ...prevState, repeats: value }));
  
  const handleNewSetWeightChange = (value: number) =>
    setNewSet((prevState) => ({ ...prevState, weight: value }));
  
  const handleEditModeClick = () => setEditMode(!isEditMode);

  const handleRequiredRepeatsChange = (value: number, index: number) => {
    const newSchedule = { ...schedule };

    console.log(newSchedule.workout)
    console.log({ value, index })
  };

  const handleRequiredWeightChange = (value: number, index: number) => {
    console.log({ value, index })
  };

  const handleDoneRepeatsChange = (value: number, index: number) => {
    console.log({ value, index })
  };

  const handleDoneWeightChange = (value: number, index: number) => {
    console.log({ value, index })
  };
  
  useEffect(() => {
    setNewExercise((prevState) => ({
      ...prevState,
      id: selectedNewExercise?.value,
      title: selectedNewExercise?.label,
    }));
  }, [selectedNewExercise]);

  return {
    isEditMode,
    schedule,

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
    handleEditModeClick,

    handleRequiredRepeatsChange,
    handleRequiredWeightChange,
    handleDoneRepeatsChange,
    handleDoneWeightChange,
  };
}
