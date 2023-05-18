export interface IHistoryDate {
  seconds: number;
  nanoseconds: number;
}

export interface IExerciseHistory {
  weight: number;
  repeats: number;
  crea
  date: Date;
}

export interface IExercise {
  id: string;
  ru: string;
  en: string;
  highest: number;
  good: number;
  history: IExerciseHistory[];
}

export interface IExercises {
  list: IExercise[];
}