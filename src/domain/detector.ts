/**
 * This is Domain level class for detector model
 * Can't create instance directly since the constructor private
 * Use static methods for creating model and use DTO as args
 */


import Uuid from "./uuid";

class Detector {
    public static fromCreateDto() {

    }

    private readonly id: Uuid;
    private readonly name: string;
    private readonly alias: string;
    private readonly detectorPackageId: Uuid;
    private readonly isActive: boolean;
    private readonly createdAt: Date;
    private readonly updatedAt: Date;

    private constructor(
        id: Uuid,
        name: string,
        alias: string,
        detectorPackageId: Uuid,
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date,
    ) {
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.detectorPackageId = detectorPackageId;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public toCreateDto() {

    }
}

export default Detector;