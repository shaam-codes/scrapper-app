/**
 * This is Domain level class for batch model
 * Can't create instance directly since the constructor private
 * Use static methods for creating model and use DTO as args
 */


import Uuid from './uuid';

class Batch {
  public static fromCreateDto() {

  }

  private readonly id: Uuid;
  private readonly name: string;
  private readonly sectionId: Uuid;
  private readonly isActive: boolean;
  private readonly createdAt: Date;
  private readonly updatedeAt: Date;

  private constructor(
        id: Uuid,
        name: string,
        sectionId: Uuid,
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date,
    ) {
    this.id = id;
    this.name = name;
    this.sectionId = sectionId;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedeAt = updatedAt;
  }

  public toCreateDto() {

  }
}

export default Batch;
