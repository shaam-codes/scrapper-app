/**
 * This is application level Data Transfer Object class
 */

import Uuid from '@domain/uuid';

class CreateResponseDto {
  id: Uuid;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: number;
  isActive: boolean;
  organizationId: string | null;
  createdAt: Date;

  public constructor(
    id: Uuid,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roleId: number,
    isActive: boolean,
    organizationId: string | null,
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

}

export default CreateResponseDto;
