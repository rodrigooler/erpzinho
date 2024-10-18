import { Controller, Get, Query } from '@nestjs/common';
import { UserService } from './user.service';
import type { SearchUserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findOne(@Query() query: SearchUserDto) {
    return this.userService.findOne(query);
  }

  @Get('search')
  findMany(@Query() query: SearchUserDto) {
    return this.userService.find(query);
  }
}
