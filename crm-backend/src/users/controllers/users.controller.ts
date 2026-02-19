import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { UsersService } from '../users.service';
import type { ApiResponseObject } from 'src/common/dto/response';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { toApiResponse } from 'src/common/utils/api-response.util';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<ApiResponseObject> {
    return { message: 'Users retrieved successfully', data: await this.usersService.findAll(), status: 'success' };
  }

  @UseGuards(JwtAuthGuard)
  @Get('me')
  async getProfile(@Req() req: any): Promise<ApiResponseObject> {
    const result = await this.usersService.getProfile(req.user.sub);
    return toApiResponse(result);
  }

  @Post('otp')
  async sendOtp(@Body() sendOtp: any): Promise<ApiResponseObject> {
    const otp = await this.usersService.sendOtp(sendOtp.phone_number);
    return toApiResponse(otp);
  }

  @Post('otp/verify')
  async verifyOtp(@Body() verifyOtp: any): Promise<ApiResponseObject> {
    const result = await this.usersService.verifyOtp(verifyOtp.phone_number, verifyOtp.otp);
    return toApiResponse(result);
  }
}
