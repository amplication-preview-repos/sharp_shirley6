import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SymptomService } from "./symptom.service";
import { SymptomControllerBase } from "./base/symptom.controller.base";

@swagger.ApiTags("symptoms")
@common.Controller("symptoms")
export class SymptomController extends SymptomControllerBase {
  constructor(protected readonly service: SymptomService) {
    super(service);
  }
}
