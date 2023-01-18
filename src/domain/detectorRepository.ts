/**
 * This Domain level port for detector model
 * This need to be implements on the Infrastructure level
 */

import Detector from './detector';

interface DetectorRepository {

    createDetector(detector: Detector): void;

}

export default DetectorRepository;
