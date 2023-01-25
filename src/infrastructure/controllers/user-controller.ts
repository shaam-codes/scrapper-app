import * as grpc from '@grpc/grpc-js';
import PostgreSqlUserRepository from './../../infrastructure/secondary-adapters/postgres/postgre-sql-user-respository';

import {SignUpUserResponse} from '../../grpc/_compiled_proto/auth/SignUpUserResponse';
import {SignUpUserInput__Output} from '../../grpc/_compiled_proto/auth/SignUpUserInput';
import Service from '../../application/user/service';
import ModificationUseCaseApi from '../primary-adapters/user/modification-use-case.api';

const signupHandler = async (
  req: grpc.ServerUnaryCall<SignUpUserInput__Output, SignUpUserResponse>,
  res: grpc.sendUnaryData<SignUpUserResponse>,
) => {
  try {
    const modificaitonUseCase = new ModificationUseCaseApi();
    const postgresqlUserRepository = new PostgreSqlUserRepository();

    const service = new Service(modificaitonUseCase, postgresqlUserRepository);

    service.create('FirstName', 'LastName', 'test@example.com', 'jhjhfvlwevfywefjw');


    res(null, {
      user: {
        id: '1',
        first_name: 'first name',
        last_name: 'last name',
        email: 'user.email',
        role_id: '12',
        organization_id: '34',
        is_active: true,
        created_at: {
          seconds: 2323,
        },
        updated_at: {
          seconds: 23232323,
        },
      },
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};


export {
  signupHandler,
};
