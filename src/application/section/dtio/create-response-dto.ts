/**
 * This is application level Data Transfer Object class
 * Can create section model using this DTO
 * This class specifically using on section creation
 */

import Uuid from '@domain/uuid';

class CreateResponseDto {
  id: Uuid;
  name: string;
  description?: string;
  organizationId: Uuid;
  isActive: boolean;
  createdAt: Date;


  public constructor(
        id: Uuid,
        name: string,
        organizationId: Uuid,
        isActive: boolean,
        createdAt: Date,
        description?: string,
      ) {
    this.id = id;
    this.name = name;
    this.organizationId = organizationId;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.description = description;
  }

}

export default CreateResponseDto;
