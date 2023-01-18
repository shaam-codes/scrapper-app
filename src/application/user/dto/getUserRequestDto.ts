import Uuid from "../../../domain/uuid";

class GetUserRequestDto {
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

  public getUpdatedAt(): Date {
    return this.updatedAt;
  }

}

export default GetUserRequestDto;