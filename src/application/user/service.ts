/**
 * This service class belongs to applicaiton layer in Hexagonal architecture
 * All business logics lives here
 * Get real values and convert into DTOs and execute using domain
 */

import User from '../../domain/user';
import UserRepository from '../../domain/user-repository';
import CreateResponseDto from './dto/create-response-dto';

import ModificationUseCase from './modificaiton-use-case';

class Service {
  private readonly modificaitonUseCase: ModificationUseCase;
  private readonly userRepository: UserRepository;

  constructor(
    modificaitonUseCase: ModificationUseCase,
    userRepository: UserRepository,
  ) {
    this.modificaitonUseCase = modificaitonUseCase;
    this.userRepository = userRepository;
  }

  public create(
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    organizationId: string,
    roleId = 3,
  ): Promise<CreateResponseDto> {
    const createRequestDto = this.modificaitonUseCase.createUser(
      firstName,
      lastName,
      email,
      password,
      roleId,
      organizationId
    );

    const user = User.fromCreateDto(createRequestDto);

    return this.userRepository.createUser(user);
  }
}

export default Service;
