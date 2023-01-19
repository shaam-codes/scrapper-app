/**
 * This service class belongs to applicaiton layer in Hexagonal architecture
 * All business logics lives here
 * Get real values and convert into DTOs and execute using domain
 */

import User from 'src/domain/user';
import UserRepository from 'src/domain/user-repository';

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
    roleId = 3,
  ) {
    const createRequestDto = this.modificaitonUseCase.createUser(firstName,
      lastName,
      email,
      password);

    const user = User.fromCreateDto(createRequestDto);

    this.userRepository.createUser(user);
  }
}

export default Service;
