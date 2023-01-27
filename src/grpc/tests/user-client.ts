import * as grpc from '@grpc/grpc-js';

import {ProtoGrpcType} from '../_compiled_proto/service';
import {getPackageDefinition} from '../utils/package';

const userPackageDef = getPackageDefinition('user/service.proto');

const userProto = grpc.loadPackageDefinition(
  userPackageDef,
) as unknown as ProtoGrpcType;

const userPackage = userProto.user;

const client = new userPackage.UserService(
  `127.0.0.1:5000`,
  grpc.credentials.createInsecure(),
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);

client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  onClientReady();
});

function onClientReady() {
  // signUpUser();
  getUser();
}

function signUpUser() {
  client.SignUpUser(
    {
      firstName: 'shaam',
      lastName: 'ampi',
      email: 'shaam@shaam.com',
      password: 'helloThere',
      passwordConfirm: 'helloThere',
      roleId: '22',
      organizationId: '324324-4324-234-234324'
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    },
  );
}

function getUser() {
  client.getUser(
    {
      userId: '014cf46f-ace2-480e-964e-896ddde1165b'
    },
    (err, res) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(res);
    },
  );
}


