// Original file: src/grpc/proto/detector/detector.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Detector {
  'id'?: (string);
  'namme'?: (string);
  'alias'?: (string);
  'detector_package_id'?: (string);
  'is_active'?: (boolean);
  'created_at'?: (_google_protobuf_Timestamp | null);
  'updated_at'?: (_google_protobuf_Timestamp | null);
}

export interface Detector__Output {
  'id': (string);
  'namme': (string);
  'alias': (string);
  'detector_package_id': (string);
  'is_active': (boolean);
  'created_at': (_google_protobuf_Timestamp__Output | null);
  'updated_at': (_google_protobuf_Timestamp__Output | null);
}
