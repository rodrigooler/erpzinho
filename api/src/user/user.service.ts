import { Injectable } from '@nestjs/common';
import type { User } from '@prisma/client';
import type { Optional } from '@prisma/client/runtime/library';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  buildWhereClause(data: Optional<User>) {
    return {
      ...(data?.id && { id: data.id }),
      ...(data?.publicId && { publicId: data.publicId }),
      ...(data?.email && { email: data.email }),
    };
  }

  async find(args?: Optional<User>) {
    const where = this.buildWhereClause(args);

    return this.prismaService.user.findMany({ where });
  }

  async findOne(args: Optional<User>) {
    const where = this.buildWhereClause(args);

    return this.prismaService.user.findFirst({ where });
  }
}
