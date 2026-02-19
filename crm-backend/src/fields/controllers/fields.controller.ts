import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import type { ApiResponseObject } from 'src/common/dto/response';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { FieldsService } from '../fields.service';

@Controller('fields')
@UseGuards(JwtAuthGuard)
export class FieldsController {
  constructor(private readonly fieldsService: FieldsService) {}

  @Get()
  async getFields(
    @Req() req: any,
    @Query('business_id') businessId?: string,
    @Query('object_id') objectId?: string,
  ): Promise<ApiResponseObject> {
    const result = await this.fieldsService.findAll(req.user.sub, businessId ?? null, objectId ?? null);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Get(':id')
  async getField(@Req() req: any, @Param('id') id: string): Promise<ApiResponseObject> {
    const result = await this.fieldsService.findOne(req.user.sub, id);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post()
  async createField(@Req() req: any, @Body() body: any): Promise<ApiResponseObject> {
    const result = await this.fieldsService.createField(req.user.sub, body);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post(':id/objects')
  async mapFieldToObject(@Req() req: any, @Param('id') id: string, @Body() body: any): Promise<ApiResponseObject> {
    const result = await this.fieldsService.mapFieldToObject(req.user.sub, id, body);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Delete(':id/objects/:objectId')
  async unmapFieldFromObject(
    @Req() req: any,
    @Param('id') id: string,
    @Param('objectId') objectId: string,
    @Query('business_id') businessId?: string,
  ): Promise<ApiResponseObject> {
    const result = await this.fieldsService.unmapFieldFromObject(req.user.sub, id, objectId, businessId ?? null);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Patch(':id')
  async updateField(@Req() req: any, @Param('id') id: string, @Body() body: any): Promise<ApiResponseObject> {
    const result = await this.fieldsService.updateField(req.user.sub, id, body);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Delete(':id')
  async deleteField(@Req() req: any, @Param('id') id: string): Promise<ApiResponseObject> {
    const result = await this.fieldsService.deleteField(req.user.sub, id);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }
}
