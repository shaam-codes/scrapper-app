/**
 * This a adapter of the in hexagonal architecture
 * More specifically known as inbound adapter | driven adapter | primary adapter
 *
 * This will use inside the api/controller
 */

import CreateRequestDto from '../../../application/user/dto/create-request-dto';
import ModificationUseCase from '../../../application/user/modificaiton-use-case';
import Uuid from '../../../domain/uuid';

class ModificationUseCaseApi implements ModificationUseCase {

  createUser(firstName: string, lastName: string, email: string, password: string): CreateRequestDto {
    return new CreateRequestDto(
      Uuid.generate(),
      firstName,
      lastName,
      email,
      password,
      3,
      true,
      'dsfsd',
      new Date,
    );
  }

}

export default ModificationUseCaseApi;
