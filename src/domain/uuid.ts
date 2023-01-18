/**
 * This class using as a wrapper for uuid generator,
 * For the time being uuid npm package as the base, for more details https://www.npmjs.com/package/uuid
 */

import {v4 as uuidv4, validate as validateUuid} from 'uuid';

class Uuid {
  public static generate(): Uuid {
    return new this(uuidv4());
  }

  public static validate(id: string) {
    if (validateUuid(id)) {
      return new this(id);
    }

    throw new Error(`${id} is not a valid UUID`);
  }

  private readonly id: string;

  private constructor(id: string) {
    this.id = id;
  }

  public value(): string {
    return this.id.valueOf();
  }
}

export default Uuid;
