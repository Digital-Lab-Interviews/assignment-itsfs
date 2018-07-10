import {Status}   from './status';

export class Pet {
  id: number;
  name: string;
  status: Status;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
