/**
 * This is application level Data Transfer Object class
 * Can create section model using this DTO
 * This class specifically using on section creation
 */

import Uuid from '@domain/uuid';

class CreateRequestDto {
  private readonly id: Uuid;
  private readonly name: string;
  private readonly alias: string;
  private readonly detectorPackageId: Uuid;
  private readonly isActive: boolean;
  private readonly createdAt: Date;

  public constructor(
        id: Uuid,
        name: string,
        alias: string,
        detectorPackageId: Uuid,
        isActive: boolean,
        createdAt: Date,
    ) {
    this.id = id;
    this.name = name;
    this.alias = alias;
    this.detectorPackageId = detectorPackageId;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }

  public getId(): Uuid {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAlias(): string {
    return this.alias;
  }

  public getDetectorPackageId(): Uuid {
    return this.detectorPackageId;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

}

export default CreateRequestDto;
