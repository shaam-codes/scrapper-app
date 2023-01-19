import User from 'src/domain/user';

import UserRepository from '../../domain/user_repository';

class PostgreSqlUserRepository implements UserRepository {
  createUser(user: User): void {
    throw new Error('Method not implemented.');
  }

}

export default PostgreSqlUserRepository;
