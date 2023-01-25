// Original file: src/grpc/proto/user/signup_user.proto


export interface SignUpUserInput {
  'first_name'?: (string);
  'last_name'?: (string);
  'email'?: (string);
  'role_id'?: (string);
  'password'?: (string);
  'passwordConfirm'?: (string);
  'organization_id'?: (string);
}

export interface SignUpUserInput__Output {
  'first_name': (string);
  'last_name': (string);
  'email': (string);
  'role_id': (string);
  'password': (string);
  'passwordConfirm': (string);
  'organization_id': (string);
}
