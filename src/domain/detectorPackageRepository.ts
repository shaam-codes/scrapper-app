/**
 * This Domain level port for detector package model
 * This need to be implements on the Infrastructure level
 */

import DetectorPackage from './detectorPackage';

interface DetectorPackageRepository {

    createDetectorPackage(detectorPackage: DetectorPackage): void;

}

export default DetectorPackageRepository;
