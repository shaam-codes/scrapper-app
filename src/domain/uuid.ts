/**
 * This class using as a wrapper for uuid generator,
 * For the time being uuid npm package as the base, for more details https://www.npmjs.com/package/uuid
 */

import { v4 as uuidv4, validate } from 'uuid';

class Uuid {
    private id: string;

    private constructor(id: string) {
        this.id = id;
    }

    public static generate(): Uuid {
        return new this(uuidv4());
    }

    public static validate(id: string) {
        if (validate(id)) {
            return new this(id);
        }

        throw new Error(`${id} is not a valid UUID`);
        
    }

    public value(): string {
        return this.id.valueOf();
    }
}

export default Uuid;