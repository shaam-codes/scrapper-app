// Original file: src/grpc/proto/detector/detector.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Detector {
  'id'?: (string);
  'namme'?: (string);
  'alias'?: (string);
  'detectorPackageId'?: (string);
  'isActive'?: (boolean);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'updatedAt'?: (_google_protobuf_Timestamp | null);
}

export interface Detector__Output {
  'id': (string);
  'namme': (string);
  'alias': (string);
  'detectorPackageId': (string);
  'isActive': (boolean);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'updatedAt': (_google_protobuf_Timestamp__Output | null);
}
