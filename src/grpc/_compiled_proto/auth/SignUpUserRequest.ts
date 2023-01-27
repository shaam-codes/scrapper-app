// Original file: src/grpc/proto/user/signup-user.proto


export interface SignUpUserRequest {
  'firstName'?: (string);
  'lastName'?: (string);
  'email'?: (string);
  'roleId'?: (string);
  'password'?: (string);
  'passwordConfirm'?: (string);
  'organizationId'?: (string);
}

export interface SignUpUserRequest__Output {
  'firstName': (string);
  'lastName': (string);
  'email': (string);
  'roleId': (string);
  'password': (string);
  'passwordConfirm': (string);
  'organizationId': (string);
}
