/**
 * This Domain level port for batch model
 * This need to be implements on the Infrastructure level
 */

import Batch from './batch';

interface BatchRepository {

    createBatch(batch: Batch): void;

}

export default BatchRepository;
