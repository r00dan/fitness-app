import moment from "moment";

export const date = new Date();

export const getMonthAndYear = (date: number | string): string => moment(date).format('L');
