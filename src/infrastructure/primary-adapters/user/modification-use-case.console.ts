/**
 * This a adapter of the in hexagonal architecture
 * More specifically known as inbound adapter | driven adapter | primary adapter
 *
 * This will use inside the console/command
 */

import CreateRequestDto from '@application/user/dto/create-request-dto';
import ModificationUseCase from '@application/user/modificaiton-use-case';

class ModificationUseCaseConsole implements ModificationUseCase {
  createUser(firstName: string, lastName: string, email: string, password: string): CreateRequestDto {
    throw new Error('Method not implemented.');
  }


}

export default ModificationUseCaseConsole;
