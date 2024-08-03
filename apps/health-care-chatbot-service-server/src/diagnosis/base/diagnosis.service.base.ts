/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Diagnosis as PrismaDiagnosis } from "@prisma/client";

export class DiagnosisServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.DiagnosisCountArgs, "select">
  ): Promise<number> {
    return this.prisma.diagnosis.count(args);
  }

  async diagnoses(
    args: Prisma.DiagnosisFindManyArgs
  ): Promise<PrismaDiagnosis[]> {
    return this.prisma.diagnosis.findMany(args);
  }
  async diagnosis(
    args: Prisma.DiagnosisFindUniqueArgs
  ): Promise<PrismaDiagnosis | null> {
    return this.prisma.diagnosis.findUnique(args);
  }
  async createDiagnosis(
    args: Prisma.DiagnosisCreateArgs
  ): Promise<PrismaDiagnosis> {
    return this.prisma.diagnosis.create(args);
  }
  async updateDiagnosis(
    args: Prisma.DiagnosisUpdateArgs
  ): Promise<PrismaDiagnosis> {
    return this.prisma.diagnosis.update(args);
  }
  async deleteDiagnosis(
    args: Prisma.DiagnosisDeleteArgs
  ): Promise<PrismaDiagnosis> {
    return this.prisma.diagnosis.delete(args);
  }
}
