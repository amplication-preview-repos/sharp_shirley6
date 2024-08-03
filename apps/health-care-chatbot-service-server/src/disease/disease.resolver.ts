import * as graphql from "@nestjs/graphql";
import { DiseaseResolverBase } from "./base/disease.resolver.base";
import { Disease } from "./base/Disease";
import { DiseaseService } from "./disease.service";

@graphql.Resolver(() => Disease)
export class DiseaseResolver extends DiseaseResolverBase {
  constructor(protected readonly service: DiseaseService) {
    super(service);
  }
}
