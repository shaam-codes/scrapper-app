/**
 * This is application level Data Transfer Object class
 * Can create section model using this DTO
 * This class specifically using on section creation
 */

import Uuid from '@domain/uuid';

class CreateResponseDto {
  id: Uuid;
  name: string;
  batchId: Uuid;
  detectorId: Uuid;
  isActive: boolean;
  createdAt: Date;

  public constructor(
        id: Uuid,
        name: string,
        batchId: Uuid,
        detectorId: Uuid,
        isActive: boolean,
        createdAt: Date,
    ) {
    this.id = id;
    this.name = name;
    this.batchId = batchId;
    this.detectorId = detectorId;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }

}

export default CreateResponseDto;

