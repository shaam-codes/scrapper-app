/**
 * This is Domain level class for detector package model
 * Can't create instance directly since the constructor private
 * Use static methods for creating model and use DTO as args
 */

import Uuid from './uuid';

class DetectorPackage {
  public static fromCreateDto() {

  }

  private readonly id: Uuid;
  private readonly name: string;
  private readonly url: string;
  private readonly sectionId: Uuid;
  private readonly isActive: boolean;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  private constructor(
        id: Uuid,
        name: string,
        url: string,
        sectionId: Uuid,
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date,
    ) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.sectionId = sectionId;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  public toCreateDto() {

  }
}

export default DetectorPackage;
