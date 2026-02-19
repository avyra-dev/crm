import { Body, Controller, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import type { ApiResponseObject } from 'src/common/dto/response';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { ObjectRecordsService } from '../object-records.service';

@Controller('objects/:objectId/records')
@UseGuards(JwtAuthGuard)
export class ObjectRecordsController {
  constructor(private readonly objectRecordsService: ObjectRecordsService) {}

  @Get()
  async getRecords(
    @Req() req: any,
    @Param('objectId') objectId: string,
    @Query('business_id') businessId?: string,
    @Query('search') search?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('sort_field') sortField?: string,
    @Query('sort_direction') sortDirection?: string,
  ): Promise<ApiResponseObject> {
    const result = await this.objectRecordsService.listRecords(req.user.sub, objectId, {
      business_id: businessId ?? null,
      search: search ?? null,
      page: page ?? null,
      limit: limit ?? null,
      sort_field: sortField ?? null,
      sort_direction: sortDirection ?? null,
    });

    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post()
  async createRecord(
    @Req() req: any,
    @Param('objectId') objectId: string,
    @Body() body: any,
  ): Promise<ApiResponseObject> {
    const result = await this.objectRecordsService.createRecord(req.user.sub, objectId, body);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Get('views')
  async getListViews(
    @Req() req: any,
    @Param('objectId') objectId: string,
    @Query('business_id') businessId?: string,
  ): Promise<ApiResponseObject> {
    const result = await this.objectRecordsService.listViews(req.user.sub, objectId, {
      business_id: businessId ?? null,
    });

    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post('views')
  async createListView(
    @Req() req: any,
    @Param('objectId') objectId: string,
    @Body() body: any,
  ): Promise<ApiResponseObject> {
    const result = await this.objectRecordsService.createView(req.user.sub, objectId, body);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Patch('views/:viewId')
  async updateListView(
    @Req() req: any,
    @Param('objectId') objectId: string,
    @Param('viewId') viewId: string,
    @Body() body: any,
  ): Promise<ApiResponseObject> {
    const result = await this.objectRecordsService.updateView(req.user.sub, objectId, viewId, body);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Get('export')
  async exportRecords(
    @Req() req: any,
    @Param('objectId') objectId: string,
    @Query('business_id') businessId?: string,
    @Query('search') search?: string,
    @Query('sort_field') sortField?: string,
    @Query('sort_direction') sortDirection?: string,
  ): Promise<ApiResponseObject> {
    const result = await this.objectRecordsService.exportRecords(req.user.sub, objectId, {
      business_id: businessId ?? null,
      search: search ?? null,
      sort_field: sortField ?? null,
      sort_direction: sortDirection ?? null,
    });

    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }
}
