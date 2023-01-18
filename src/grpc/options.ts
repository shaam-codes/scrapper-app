import * as protoLoader from '@grpc/proto-loader';


const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

export {
    options,
};
