// Original file: src/grpc/proto/user/signup-user.proto


export interface SignUpUserInput {
  'firstName'?: (string);
  'lastName'?: (string);
  'email'?: (string);
  'roleId'?: (string);
  'password'?: (string);
  'passwordConfirm'?: (string);
  'organizationId'?: (string);
}

export interface SignUpUserInput__Output {
  'firstName': (string);
  'lastName': (string);
  'email': (string);
  'roleId': (string);
  'password': (string);
  'passwordConfirm': (string);
  'organizationId': (string);
}
