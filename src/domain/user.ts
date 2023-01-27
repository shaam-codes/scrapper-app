/**
 * This is Domain level class for the user model
 * Can't create instance without a DTO
 * Use static functions for accepting the DTO and get domain instance
 */

import CreateRequestDto from '@application/user/dto/create-request-dto';
import GetRequestDto from '../application/user/dto/get-request-dto';
import GetResponseDto from '../application/user/dto/get-response-dto';

import CreateResponseDto from '../application/user/dto/create-response-dto';

import Uuid from './uuid';


class User {
  public static fromCreateDto(createRequestDto: CreateRequestDto): User {
    return new this(
      createRequestDto.getId(),
      createRequestDto.getFirstNamme(),
      createRequestDto.getLastName(),
      createRequestDto.getEmail(),
      createRequestDto.getPassword(),
      createRequestDto.getRoleId(),
      createRequestDto.getIsActive(),
      createRequestDto.getOrganizationId(),
      createRequestDto.getCreatedAt(),
      null,
    );
  }

  public static fromGetDto(getRequestDto: GetRequestDto): User {
    return new this(
      getRequestDto.getId(),
      getRequestDto.getFirstNamme(),
      getRequestDto.getLastName(),
      getRequestDto.getEmail(),
      getRequestDto.getPassword(),
      getRequestDto.getRoleId(),
      getRequestDto.getIsActive(),
      getRequestDto.getOrganizationId(),
      getRequestDto.getCreatedAt(),
      getRequestDto.getUpdatedAt(),
    );
  }

  private readonly id: Uuid;
  private readonly firstName: string;
  private readonly lastName: string;
  private readonly email: string;
  private readonly password: string;
  private readonly roleId: number;
  private readonly isActive: boolean;
  private readonly organizationId: string | null;
  private readonly createdAt: Date;
  private readonly updatedAt: Date | null;

  private constructor(
    id: Uuid,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roleId: number,
    isActive: boolean,
    organizationId: string | null,
    createdAt: Date,
    updatedAt: Date | null,
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


  public toCreateDto(): CreateResponseDto {
    return new CreateResponseDto(
      this.id,
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.roleId,
      this.isActive,
      this.organizationId,
      this.createdAt,
    );
  }

  public toGetDto(): GetResponseDto {
    return new GetResponseDto(
      this.id,
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.roleId,
      this.isActive,
      this.organizationId,
      this.createdAt,
      this.updatedAt,
    );
  }

}

export default User;

