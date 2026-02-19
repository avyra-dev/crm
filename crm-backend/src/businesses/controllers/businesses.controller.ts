import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import type { ApiResponseObject } from 'src/common/dto/response';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { BusinessesService } from '../businesses.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';

const BUSINESS_LOGO_UPLOAD_DIR = join(process.cwd(), 'uploads', 'business-logos');
const LOGO_FILE_SIZE_LIMIT = 5 * 1024 * 1024;

const ensureUploadDir = () => {
  if (!existsSync(BUSINESS_LOGO_UPLOAD_DIR)) {
    mkdirSync(BUSINESS_LOGO_UPLOAD_DIR, { recursive: true });
  }
};

const imageFileFilter = (_req: any, file: any, callback: any) => {
  if (file?.mimetype?.startsWith('image/')) {
    return callback(null, true);
  }
  return callback(new BadRequestException('Only image files are allowed for logo'), false);
};

const logoUploadInterceptor = FileInterceptor('logo', {
  storage: diskStorage({
    destination: (_req, _file, callback) => {
      ensureUploadDir();
      callback(null, BUSINESS_LOGO_UPLOAD_DIR);
    },
    filename: (_req, file, callback) => {
      const safeExt = extname(file.originalname || '').toLowerCase();
      const uniqueName = `biz-${Date.now()}-${Math.round(Math.random() * 1e9)}${safeExt}`;
      callback(null, uniqueName);
    },
  }),
  fileFilter: imageFileFilter,
  limits: { fileSize: LOGO_FILE_SIZE_LIMIT },
});

@Controller('businesses')
@UseGuards(JwtAuthGuard)
export class BusinessesController {
  constructor(private readonly businessesService: BusinessesService) {}

  @Get()
  async getBusinesses(@Req() req: any): Promise<ApiResponseObject> {
    const result = await this.businessesService.findAll(req.user.sub);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Get(':id')
  async getBusiness(@Req() req: any, @Param('id') id: string): Promise<ApiResponseObject> {
    const result = await this.businessesService.findOne(req.user.sub, id);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Post()
  @UseInterceptors(logoUploadInterceptor)
  async createBusiness(
    @Req() req: any,
    @Body() body: any,
    @UploadedFile() file?: any,
  ): Promise<ApiResponseObject> {
    const payload = {
      ...body,
      logo_path: file ? `/uploads/business-logos/${file.filename}` : body?.logo_path,
    };
    const result = await this.businessesService.createBusiness(req.user.sub, payload);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Patch(':id')
  @UseInterceptors(logoUploadInterceptor)
  async updateBusiness(
    @Req() req: any,
    @Param('id') id: string,
    @Body() body: any,
    @UploadedFile() file?: any,
  ): Promise<ApiResponseObject> {
    const payload = {
      ...body,
      ...(file ? { logo_path: `/uploads/business-logos/${file.filename}` } : {}),
    };
    const result = await this.businessesService.updateBusiness(req.user.sub, id, payload);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Put(':id')
  @UseInterceptors(logoUploadInterceptor)
  async editBusiness(
    @Req() req: any,
    @Param('id') id: string,
    @Body() body: any,
    @UploadedFile() file?: any,
  ): Promise<ApiResponseObject> {
    const payload = {
      ...body,
      ...(file ? { logo_path: `/uploads/business-logos/${file.filename}` } : {}),
    };
    const result = await this.businessesService.updateBusiness(req.user.sub, id, payload);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }

  @Delete(':id')
  async deleteBusiness(@Req() req: any, @Param('id') id: string): Promise<ApiResponseObject> {
    const result = await this.businessesService.deleteBusiness(req.user.sub, id);
    return { message: result.message, data: result.data ?? null, status: result.status ? 'success' : 'error' };
  }
}
