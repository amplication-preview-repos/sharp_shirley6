import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SymptomServiceBase } from "./base/symptom.service.base";

@Injectable()
export class SymptomService extends SymptomServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
