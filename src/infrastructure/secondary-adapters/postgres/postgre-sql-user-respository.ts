import User from 'src/domain/user';

import UserRepository from '../../../domain/user-repository';

class PostgreSqlUserRepository implements UserRepository {
  createUser(user: User): void {
    throw new Error('Method not implemented.');
  }

}

export default PostgreSqlUserRepository;
