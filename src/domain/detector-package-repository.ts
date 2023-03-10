/**
 * This a port in hexagonal architecture
 * More specifically known as outbound port | driven port | secondary port
 * The adapters will implements and use it from infrastructure layer
 * Also those adapters known as outbound adapter | driven adapter | secondary port
 *
 * This includes some of Detector package related database operations
 * Other Detector Package operations can be found in other interfaces,to maintain Interface segregation (SOLID)
 */


import DetectorPackage from './detector-package';

interface DetectorPackageRepository {

    createDetectorPackage(detectorPackage: DetectorPackage): void;

}

export default DetectorPackageRepository;
