-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(36) NOT NULL,
    "firstName" VARCHAR(256) NOT NULL,
    "lastName" VARCHAR(256) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "roleId" SMALLINT NOT NULL,
    "organizationId" VARCHAR(36),
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "organizations" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "address" TEXT,
    "region" TEXT,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sections" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "description" TEXT,
    "organizationId" VARCHAR(36) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "batches" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "sectionId" VARCHAR(36) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "batches_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detectors" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "alias" VARCHAR(256),
    "detectorPackageId" VARCHAR(36) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "detectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "detector_packages" (
    "id" VARCHAR(36) NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "url" VARCHAR(256) NOT NULL,
    "sectionId" VARCHAR(36) NOT NULL,
    "isActive" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "detector_packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "readings" (
    "id" VARCHAR(36) NOT NULL,
    "value" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "batchId" VARCHAR(36) NOT NULL,
    "detectorId" VARCHAR(36) NOT NULL,
    "requestedAt" TIMESTAMP(3) NOT NULL,
    "receivedt" TIMESTAMP(3) NOT NULL,
    "isCorrupted" BOOLEAN NOT NULL,

    CONSTRAINT "readings_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sections" ADD CONSTRAINT "sections_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "batches" ADD CONSTRAINT "batches_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detectors" ADD CONSTRAINT "detectors_detectorPackageId_fkey" FOREIGN KEY ("detectorPackageId") REFERENCES "detector_packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "detector_packages" ADD CONSTRAINT "detector_packages_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "sections"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "readings" ADD CONSTRAINT "readings_batchId_fkey" FOREIGN KEY ("batchId") REFERENCES "batches"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "readings" ADD CONSTRAINT "readings_detectorId_fkey" FOREIGN KEY ("detectorId") REFERENCES "detectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
