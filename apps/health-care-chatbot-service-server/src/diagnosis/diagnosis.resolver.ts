import * as graphql from "@nestjs/graphql";
import { DiagnosisResolverBase } from "./base/diagnosis.resolver.base";
import { Diagnosis } from "./base/Diagnosis";
import { DiagnosisService } from "./diagnosis.service";

@graphql.Resolver(() => Diagnosis)
export class DiagnosisResolver extends DiagnosisResolverBase {
  constructor(protected readonly service: DiagnosisService) {
    super(service);
  }
}
