import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { LoginDto } from './auth.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Controller('auths')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    return this.authService.validateUser(body.email, body.password);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  async me(@Request() req) {
    return {
      ...req.user,
    };
  }
}
