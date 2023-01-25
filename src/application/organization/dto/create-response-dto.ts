/**
 * This is application level Data Transfer Object class
 */

import Uuid from '@domain/uuid';

class CreateOrganizationResponseDto {
  id: Uuid;
  name: string;
  address: string;
  region: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;


  public constructor(
      id: Uuid,
      name: string,
      address: string,
      region: string,
      isActive: boolean,
      createdAt: Date,
      updatedAt: Date,
    ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.region = region;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

}

export default CreateOrganizationResponseDto;
