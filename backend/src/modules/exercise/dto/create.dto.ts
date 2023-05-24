import { Nullable } from 'common-types';

export class Create {
  id!: string;
  title!: string;
  description?: Nullable<string>;
}
