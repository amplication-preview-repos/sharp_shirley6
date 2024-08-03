import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiseaseService } from "./disease.service";
import { DiseaseControllerBase } from "./base/disease.controller.base";

@swagger.ApiTags("diseases")
@common.Controller("diseases")
export class DiseaseController extends DiseaseControllerBase {
  constructor(protected readonly service: DiseaseService) {
    super(service);
  }
}
