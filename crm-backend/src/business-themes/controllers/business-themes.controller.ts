import { Body, Controller, Get, Post, Query, Req, UseGuards } from '@nestjs/common';
import type { ApiResponseObject } from 'src/common/dto/response';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { BusinessThemesService } from '../business-themes.service';

@Controller('business-themes')
@UseGuards(JwtAuthGuard)
export class BusinessThemesController {
  constructor(private readonly businessThemesService: BusinessThemesService) {}

  @Get('default')
  async getDefaultTheme(@Req() req: any, @Query('business_id') businessId?: string): Promise<ApiResponseObject> {
    const result = await this.businessThemesService.getDefaultTheme(req.user.sub, businessId ?? null);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post('default')
  async saveDefaultTheme(@Req() req: any, @Body() body: any): Promise<ApiResponseObject> {
    const businessId = body?.business_id ?? null;
    const sourcePayload = body?.theme ?? body;
    const themePayload =
      sourcePayload && typeof sourcePayload === 'object'
        ? (() => {
            const copy = { ...sourcePayload };
            delete (copy as any).business_id;
            delete (copy as any).name;
            return copy;
          })()
        : sourcePayload;

    const result = await this.businessThemesService.upsertDefaultTheme(
      req.user.sub,
      themePayload,
      businessId,
    );
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }
}
