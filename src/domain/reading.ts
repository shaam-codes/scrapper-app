/**
 * This is Domain level class for batch model
 * Can't create instance directly since the constructor private
 * Use static methods for creating model and use DTO as args
 */


import Uuid from './uuid';

class Reading {
  public static fromCreateDto() {

  }

  private readonly id: Uuid;
  private readonly value: number;
  private readonly batchId: Uuid;
  private readonly detectorId: Uuid;
  private readonly requestedAt: Date;
  private readonly receivedAt: Date;
  private readonly isCorrupted: boolean;

  private constructor(
        id: Uuid,
        value: number,
        batchId: Uuid,
        detectorId: Uuid,
        requestedAt: Date,
        receivedAt: Date,
        isCorrupted: boolean,
    ) {
    this.id = id;
    this.value = value;
    this.batchId = batchId;
    this.detectorId = detectorId;
    this.requestedAt = requestedAt;
    this.receivedAt = receivedAt;
    this.isCorrupted = isCorrupted;
  }

  public toCreateDto() {

  }
}

export default Reading;
