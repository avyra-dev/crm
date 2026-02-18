import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import type { ApiResponseObject } from 'src/common/dto/response';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { BusinessThemesService } from '../business-themes.service';

@Controller('business-themes')
@UseGuards(JwtAuthGuard)
export class BusinessThemesController {
  constructor(private readonly businessThemesService: BusinessThemesService) {}

  @Get('default')
  async getDefaultTheme(@Req() req: any): Promise<ApiResponseObject> {
    const result = await this.businessThemesService.getDefaultTheme(req.user.sub);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post('default')
  async saveDefaultTheme(@Req() req: any, @Body() body: any): Promise<ApiResponseObject> {
    const themePayload = body?.theme ?? body;
    const result = await this.businessThemesService.upsertDefaultTheme(req.user.sub, themePayload);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }
}
