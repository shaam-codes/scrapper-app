/**
 * This is application level Data Transfer Object class
 * Can create section model using this DTO
 * This class specifically using on section creation
 */

import Uuid from '../../../domain/uuid';

class CreateRequestDto {
  private readonly id: Uuid;
  private readonly name: string;
  private readonly description?: string;
  private readonly organizationId: Uuid;
  private readonly isActive: boolean;
  private readonly createdAt: Date;


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

  public getId(): Uuid {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string | undefined {
    return this.description;
  }

  public getOrganization(): Uuid {
    return this.organizationId;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

}

export default CreateRequestDto;
