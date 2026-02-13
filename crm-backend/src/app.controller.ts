import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import type { ApiResponseObject } from './common/dto/response';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): ApiResponseObject {
    return { message: this.appService.getHello(), status: 'success' };
  }
}
