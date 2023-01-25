/**
 * This is application level Data Transfer Object class
 * Can create section model using this DTO
 * This class specifically using on section creation
 */

import Uuid from '@domain/uuid';

class CreateRequestDto {
  private readonly id: Uuid;
  private readonly value: number;
  private readonly batchId: Uuid;
  private readonly detectorId: Uuid;
  private readonly requestedAt: Date;
  private readonly receivedAt: Date;
  private readonly isCorrupted: boolean;

  public constructor(
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

  public getId(): Uuid {
    return this.id;
  }

  public getValue(): number {
    return this.value;
  }

  public getBatchId(): Uuid {
    return this.batchId;
  }

  public getDetectorId(): Uuid {
    return this.detectorId;
  }

  public getRequestedAt(): Date {
    return this.requestedAt;
  }

  public getReceivedAt(): Date {
    return this.receivedAt;
  }

  public getIsCorrupted(): boolean {
    return this.isCorrupted;
  }

}

export default CreateRequestDto;

