class GetUserResponseDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  roleId: number;
  isActive: boolean;
  organizationId: string;
  createdAt: Date;
  updatedAt: Date;

  public constructor(
          id: string,
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

}
