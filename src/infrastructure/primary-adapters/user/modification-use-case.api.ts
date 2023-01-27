/**
 * This a adapter of the in hexagonal architecture
 * More specifically known as inbound adapter | driven adapter | primary adapter
 *
 * This will use inside the api/controller
 */

import GetRequestDto from '@application/user/dto/get-request-dto';
import CreateRequestDto from '../../../application/user/dto/create-request-dto';
import ModificationUseCase from '../../../application/user/modificaiton-use-case';
import Uuid from '../../../domain/uuid';

class ModificationUseCaseApi implements ModificationUseCase {
  getUserId(userId: string): Uuid {
    return Uuid.validate(userId);
  }

  createUser(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    roleId: number,
    organizationId: string,
  ): CreateRequestDto {
    
    return new CreateRequestDto(
      Uuid.generate(),
      firstName,
      lastName,
      email,
      password,
      roleId,
      true,
      organizationId,
      new Date(),
    );
  }

}

export default ModificationUseCaseApi;
