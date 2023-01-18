import * as grpc from '@grpc/grpc-js';

import server from './grpc/server'


server.bindAsync(
  // port to serve on
  // TODO: Need to get it from env files or default configs
  "127.0.0.1:5000",
  
  // authentication settings.
  // Use insecure for now, since front proxy will accept onlt TLS
  grpc.ServerCredentials.createInsecure(),
  
  //server start callback
  (error, port) => {
    console.log(`gRPC server listening on port ${port}`);
    
    server.start();
  }
);