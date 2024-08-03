import * as graphql from "@nestjs/graphql";
import { SymptomResolverBase } from "./base/symptom.resolver.base";
import { Symptom } from "./base/Symptom";
import { SymptomService } from "./symptom.service";

@graphql.Resolver(() => Symptom)
export class SymptomResolver extends SymptomResolverBase {
  constructor(protected readonly service: SymptomService) {
    super(service);
  }
}
