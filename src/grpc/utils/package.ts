import path from 'path';

import * as protoLoader from '@grpc/proto-loader';

import {options} from '../options';

const getPackageDefinition = (protoFileName: string, protoRootPath = './../proto') => {
  return protoLoader.loadSync(
      path.resolve(__dirname, protoRootPath, protoFileName),
      options,
    );
};

export {
    getPackageDefinition,
};
