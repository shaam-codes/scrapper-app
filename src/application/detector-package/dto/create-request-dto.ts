/**
 * This is application level Data Transfer Object class
 * Can create organization model using this DTO
 * This class specifically using on organization creation
 */

import Uuid from '@domain/uuid';

class CreateRequestDto {
  private readonly id: Uuid;
  private readonly name: string;
  private readonly url: string;
  private readonly sectionId: Uuid;
  private readonly isActive: boolean;
  private readonly createdAt: Date;


  public constructor(
        id: Uuid,
        name: string,
        url: string,
        sectionId: Uuid,
        isActive: boolean,
        createdAt: Date,
    ) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.sectionId = sectionId;
    this.isActive = isActive;
    this.createdAt = createdAt;
  }

  public getId(): Uuid {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getUrl(): string {
    return this.url;
  }

  public getSectionId(): Uuid {
    return this.sectionId;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }
}

export default CreateRequestDto;
