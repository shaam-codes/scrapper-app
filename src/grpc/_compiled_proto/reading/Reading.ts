// Original file: src/grpc/proto/reading/reading.proto

import type { Timestamp as _google_protobuf_Timestamp, Timestamp__Output as _google_protobuf_Timestamp__Output } from '../google/protobuf/Timestamp';

export interface Reading {
  'id'?: (string);
  'value'?: (number | string);
  'batchId'?: (string);
  'detectorId'?: (string);
  'isActive'?: (boolean);
  'requestedAt'?: (_google_protobuf_Timestamp | null);
  'receivedAt'?: (_google_protobuf_Timestamp | null);
  'createdAt'?: (_google_protobuf_Timestamp | null);
  'isCorrupted'?: (boolean);
}

export interface Reading__Output {
  'id': (string);
  'value': (number);
  'batchId': (string);
  'detectorId': (string);
  'isActive': (boolean);
  'requestedAt': (_google_protobuf_Timestamp__Output | null);
  'receivedAt': (_google_protobuf_Timestamp__Output | null);
  'createdAt': (_google_protobuf_Timestamp__Output | null);
  'isCorrupted': (boolean);
}
