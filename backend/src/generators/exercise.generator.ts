import { faker } from '@faker-js/faker';

import { Exercise } from 'exercise';

export const generateDefaultExercises = (length: number): Exercise[] =>
  Array.from({ length }).map(() => ({
    id: faker.string.nanoid(),
    title: faker.lorem.words({ min: 1, max: 3 }),
    description: faker.lorem.words({ min: 4, max: 10 }),
    createdAt: faker.date.recent(),
    updatedAt: faker.date.recent(),
  }));
