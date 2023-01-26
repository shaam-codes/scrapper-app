import * as grpc from '@grpc/grpc-js';


import {SignUpUserResponse} from '../../grpc/_compiled_proto/auth/SignUpUserResponse';
import {SignUpUserInput__Output} from '../../grpc/_compiled_proto/auth/SignUpUserInput';
import Service from '../../application/user/service';
import ModificationUseCaseApi from '../primary-adapters/user/modification-use-case.api';
import PostgreSqlUserRepository from '../secondary-adapters/postgres/postgre-sql-user-respository';

const signupHandler = (
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
        firstName: 'first name',
        email: 'user.email',
        createdAt: {
          seconds: 2323,
        },
        updatedAt: {
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
