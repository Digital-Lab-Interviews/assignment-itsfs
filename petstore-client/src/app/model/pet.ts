import { Status } from './status';

export class Pet {
  id: number;
  name: string;
  status: Status;

  constructor(init?: Partial<Pet>) {
    Object.assign(this, init);
  }
}
