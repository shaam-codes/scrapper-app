import Service from 'src/application/user/service';

import ModificationUseCaseApi from '../primary-adapters/user/modification-use-case.api';
import PostgreSqlUserRepository from '../secondary-adapters/postgres/postgre-sql-user-respository';

class UserController {

  create(request: any) {
    const modificaitonUseCase = new ModificationUseCaseApi();
    const postgresqlUserRepository = new PostgreSqlUserRepository();

    const service = new Service(modificaitonUseCase, postgresqlUserRepository);

    service.create('FirstName', 'LastName', 'test@example.com', 'jhjhfvlwevfywefjw');

    return 'RESPONSE';
  }

}

export default UserController;
