/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { SymptomService } from "../symptom.service";
import { SymptomCreateInput } from "./SymptomCreateInput";
import { Symptom } from "./Symptom";
import { SymptomFindManyArgs } from "./SymptomFindManyArgs";
import { SymptomWhereUniqueInput } from "./SymptomWhereUniqueInput";
import { SymptomUpdateInput } from "./SymptomUpdateInput";

export class SymptomControllerBase {
  constructor(protected readonly service: SymptomService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Symptom })
  async createSymptom(
    @common.Body() data: SymptomCreateInput
  ): Promise<Symptom> {
    return await this.service.createSymptom({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Symptom] })
  @ApiNestedQuery(SymptomFindManyArgs)
  async symptoms(@common.Req() request: Request): Promise<Symptom[]> {
    const args = plainToClass(SymptomFindManyArgs, request.query);
    return this.service.symptoms({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Symptom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async symptom(
    @common.Param() params: SymptomWhereUniqueInput
  ): Promise<Symptom | null> {
    const result = await this.service.symptom({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Symptom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateSymptom(
    @common.Param() params: SymptomWhereUniqueInput,
    @common.Body() data: SymptomUpdateInput
  ): Promise<Symptom | null> {
    try {
      return await this.service.updateSymptom({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Symptom })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteSymptom(
    @common.Param() params: SymptomWhereUniqueInput
  ): Promise<Symptom | null> {
    try {
      return await this.service.deleteSymptom({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
