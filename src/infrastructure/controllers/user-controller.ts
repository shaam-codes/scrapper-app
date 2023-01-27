import * as grpc from '@grpc/grpc-js';


import {SignUpUserResponse} from '../../grpc/_compiled_proto/auth/SignUpUserResponse';
import {SignUpUserInput__Output} from '../../grpc/_compiled_proto/auth/SignUpUserInput';
import Service from '../../application/user/service';
import ModificationUseCaseApi from '../primary-adapters/user/modification-use-case.api';
import PostgreSqlUserRepository from '../secondary-adapters/postgres/postgre-sql-user-respository';

const signupHandler = async (
  req: grpc.ServerUnaryCall<SignUpUserInput__Output, SignUpUserResponse>,
  res: grpc.sendUnaryData<SignUpUserResponse>,
) => {
  try {
    const modificaitonUseCase = new ModificationUseCaseApi();
    const postgresqlUserRepository = new PostgreSqlUserRepository();

    const service = new Service(modificaitonUseCase, postgresqlUserRepository);

    const {
      firstName,
      lastName,
      email,
      password,
      passwordConfirm,
      organizationId,
      roleId,
    } = req.request;

    // validate properties and make sure the password match with connfirm password

    const createdUserDto = await service.create(
      firstName,
      lastName,
      email,
      password,
      organizationId,
    );


    res(null, {id: createdUserDto.id.value()});
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
