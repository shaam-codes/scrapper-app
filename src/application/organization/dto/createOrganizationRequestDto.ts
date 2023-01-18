/**
 * This is application level Data Transfer Object class
 * Can create organization model using this DTO
 * This class specifically using on organization creation
 */

import Uuid from "../../../domain/uuid";

class CreateOrganizationRequestDto {
  private readonly id: Uuid;
  private readonly name: string;
  private readonly address: string;
  private readonly region: string;
  private readonly isActive: boolean;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;


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

  public getId(): Uuid {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getAddress(): string {
    return this.address;
  }

  public getRegion(): string {
    return this.region;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

}

export default CreateOrganizationRequestDto;
