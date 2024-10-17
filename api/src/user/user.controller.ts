import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findMany() {
    return this.userService.findMany();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.userService.findBy({
      id,
    });
  }

  @Get('public/:id')
  findByIdPublic(@Param('id') publicId: string) {
    return this.userService.findBy({
      publicId,
    });
  }

  @Get('email/:email')
  findByEmail(@Param('email') email: string) {
    return this.userService.findBy({ email });
  }
}
