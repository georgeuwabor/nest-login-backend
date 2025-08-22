/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<string | null> {
    if (username === 'admin' && password === 'password') {
      const payload = { sub: username, role: 'admin' };
      const token = await this.jwtService.signAsync(payload);
      return token;
    }
    return null;
  }
}
