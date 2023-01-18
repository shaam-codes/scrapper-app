/**
 * This is Domain level class for section model
 * Can't create instance directly since the constructor private
 * Use static methods for creating model and use DTO as args
 */

import Uuid from "./uuid";

class Section {
    public static fromCreateDto() {

    }

    private readonly id: Uuid;
    private readonly name: string;
    private readonly description: string;
    private readonly organizationId: Uuid;
    private readonly isActive: boolean;
    private readonly createdAt: Date;
    private readonly updatedeAt: Date;

    private constructor(
        id: Uuid,
        name: string,
        description: string,
        organizationId: Uuid,
        isActive: boolean,
        createdAt: Date,
        updatedAt: Date,
    ) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.organizationId = organizationId;
        this.isActive = isActive;
        this.createdAt = createdAt;
        this.updatedeAt = updatedAt;
    }

    public toCreateDto() {

    }
}

export default Section;