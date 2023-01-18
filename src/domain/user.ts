/**
 * This is Domain level class for the user model
 * Can't create instance without a DTO
 * Use static functions for accepting the DTO and get domain instance
 */

import Uuid from './uuid';


class User {
  public static fromCreateDto() {

  }

  private readonly id: Uuid;
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly email: string;
  private readonly password: string;
  private readonly roleId: number;
  private readonly isActive: boolean;
  private readonly organizationId: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  private constructor(
        id: Uuid,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        roleId: number,
        isActive: boolean,
        organizationId: string,
        createdAt: Date,
        updatedAt: Date,
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
    this.updatedAt = updatedAt;
  }


  public toCreateDto() {

  }

}

export default User;

