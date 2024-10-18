import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<{
    accessToken: string;
  }> {
    const user = await this.userService.findBy({ email });

    if (!user || user.password !== password) {
      throw new BadRequestException('Invalid credentials');
    }

    const payload = { sub: user.id, email: user.email };

    const token = await this.jwtService.signAsync(payload);

    return {
      accessToken: `Bearer ${token}`,
    };
  }
}
