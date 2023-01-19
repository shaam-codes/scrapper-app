/**
 * This a port in hexagonal architecture
 * More specifically known as outbound port | driven port | secondary port
 * The adapters will implements and use it from infrastructure layer
 * Also those adapters known as outbound adapter | driven adapter | secondary port
 *
 * This includes some of Section related database operations
 * Other Section operations can be found in other interfaces,to maintain Interface segregation (SOLID)
 */

import Section from './section';

interface SectionRepository {

    createSection(section: Section): void;

}

export default SectionRepository;
