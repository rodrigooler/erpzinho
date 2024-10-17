import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  findMany() {
    return this.prismaService.user.findMany();
  }

  buildWhereBy(data: { id: string; publicId: string; email: string }) {
    let where = {};

    if (data.id) {
      where = { ...where, id: data.id };
    }

    if (data.publicId) {
      where = { ...where, publicId: data.publicId };
    }

    if (data.email) {
      where = { ...where, email: data.email };
    }

    return where;
  }

  findBy(args: any) {
    const where = this.buildWhereBy(args);

    return this.prismaService.user.findFirst({ where });
  }
}
