import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import type { ApiResponseObject } from 'src/common/dto/response';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { ObjectsService } from '../objects.service';

@Controller('objects')
@UseGuards(JwtAuthGuard)
export class ObjectsController {
  constructor(private readonly objectsService: ObjectsService) {}

  @Get()
  async getObjects(
    @Req() req: any,
    @Query('business_id') businessId?: string,
    @Query('include_mapped') includeMapped?: string,
  ): Promise<ApiResponseObject> {
    const includeMappedFlag = ['1', 'true', 'yes', 'y'].includes(String(includeMapped || '').trim().toLowerCase());
    const result = await this.objectsService.findAll(req.user.sub, businessId ?? null, includeMappedFlag);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Get(':id')
  async getObject(@Req() req: any, @Param('id') id: string): Promise<ApiResponseObject> {
    const result = await this.objectsService.findOne(req.user.sub, id);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post()
  async createObject(@Req() req: any, @Body() body: any): Promise<ApiResponseObject> {
    const result = await this.objectsService.createObject(req.user.sub, body);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post(':id/businesses')
  async mapObjectToBusiness(
    @Req() req: any,
    @Param('id') id: string,
    @Body() body: any,
  ): Promise<ApiResponseObject> {
    const result = await this.objectsService.mapObjectToBusiness(req.user.sub, id, body);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Patch(':id')
  async updateObject(@Req() req: any, @Param('id') id: string, @Body() body: any): Promise<ApiResponseObject> {
    const result = await this.objectsService.updateObject(req.user.sub, id, body);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Delete(':id')
  async deleteObject(@Req() req: any, @Param('id') id: string): Promise<ApiResponseObject> {
    const result = await this.objectsService.deleteObject(req.user.sub, id);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }
}
