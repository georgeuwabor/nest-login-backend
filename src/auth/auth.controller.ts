import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username, password } = body;
    const token = await this.authService.validateUser(username, password);
    if (!token) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }
    return { message: 'Login successful', token };
  }
}
