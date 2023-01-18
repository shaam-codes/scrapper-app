/**
 * This Domain level port for section model
 * This need to be implements on the Infrastructure level
 */

import Section from './section';

interface SectionRepository {

    createSection(section: Section): void;

}

export default SectionRepository;
