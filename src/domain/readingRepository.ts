/**
 * This Domain level port for reading model
 * This need to be implements on the Infrastructure level
 */

import Reading from './reading';

interface ReadingRepository {

    createReading(reading: Reading): void;

}

export default ReadingRepository;
