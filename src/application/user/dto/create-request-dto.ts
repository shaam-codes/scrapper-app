/**
 * This is application level Data Transfer Object class
 * Can create user model using this DTO
 * This class specifically using on user creation
 */

import Uuid from '@domain/uuid';

class CreateRequestDto {
  private readonly id: Uuid;
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly email: string;
  private readonly password: string;
  private readonly roleId: number;
  private readonly isActive: boolean;
  private readonly organizationId: string;
  private readonly createdAt: Date;

  public constructor(
        id: Uuid,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        roleId: number,
        isActive: boolean,
        organizationId: string,
        createdAt: Date,
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.roleId = roleId;
    this.isActive = isActive;
    this.organizationId = organizationId;
    this.createdAt = createdAt;
  }

  public getId(): Uuid {
    return this.id;
  }

  public getFirstNamme(): string {
    return this.firstName;
  }

  public getLastName(): string {
    return this.lastName;
  }

  public getEmail(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public getRoleId(): number {
    return this.roleId;
  }

  public getIsActive(): boolean {
    return this.isActive;
  }

  public getOrganizationId(): string {
    return this.organizationId;
  }

  public getCreatedAt(): Date {
    return this.createdAt;
  }

}

export default CreateRequestDto;
