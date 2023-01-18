/**
 * This Domain level port for organization model
 * This need to be implements on the Infrastructure level
 */

import Organization from './organization';

interface OrganizationRepository {

    createOrganization(organization: Organization): void;

}

export default OrganizationRepository;
