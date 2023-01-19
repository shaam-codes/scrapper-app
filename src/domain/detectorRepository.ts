/**
 * This a port in hexagonal architecture
 * More specifically known as outbound port | driven port | secondary port
 * The adapters will implements and use it from infrastructure layer
 * Also those adapters known as outbound adapter | driven adapter | secondary port
 *
 * This includes some of Detector related database operations
 * Other Detector operations can be found in other interfaces,to maintain Interface segregation (SOLID)
 */

import Detector from './detector';

interface DetectorRepository {

    createDetector(detector: Detector): void;

}

export default DetectorRepository;
