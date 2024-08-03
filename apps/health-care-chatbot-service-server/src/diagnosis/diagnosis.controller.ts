import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DiagnosisService } from "./diagnosis.service";
import { DiagnosisControllerBase } from "./base/diagnosis.controller.base";

@swagger.ApiTags("diagnoses")
@common.Controller("diagnoses")
export class DiagnosisController extends DiagnosisControllerBase {
  constructor(protected readonly service: DiagnosisService) {
    super(service);
  }
}
