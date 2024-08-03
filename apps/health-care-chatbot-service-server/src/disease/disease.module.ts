import { Module } from "@nestjs/common";
import { DiseaseModuleBase } from "./base/disease.module.base";
import { DiseaseService } from "./disease.service";
import { DiseaseController } from "./disease.controller";
import { DiseaseResolver } from "./disease.resolver";

@Module({
  imports: [DiseaseModuleBase],
  controllers: [DiseaseController],
  providers: [DiseaseService, DiseaseResolver],
  exports: [DiseaseService],
})
export class DiseaseModule {}
