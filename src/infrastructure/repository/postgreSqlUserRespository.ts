import UserRepository from '../../domain/userRepository';

class PostgreSqlUserRepository implements UserRepository {
  createUser(user: User): void {
    throw new Error('Method not implemented.');
  }

}

export default PostgreSqlUserRepository;