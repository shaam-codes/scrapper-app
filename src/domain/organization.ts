/**
 * This is Domain level class for organization model
 * can't create instance directly since no public constructor,
 * only way to create instance, use static methods with DTO args
 */

import Uuid from "./uuid";

class Organization {
  public static fromCreateDto() {

  }

  private readonly id: Uuid;
  private readonly name: string;
  private readonly address: string;
  private readonly region: string;
  private readonly isActive: boolean;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  private constructor(
        id: Uuid,
        name: string,
        address: string,
        region: string,
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date,
    ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.region = region;
    this.isActive = isActive;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }


  public toCreateDto() {

  }

}

export default Organization;