import { Injectable } from '@nestjs/common';
import type { Prisma, Product, User } from '@prisma/client';
import type { Optional } from '@prisma/client/runtime/library';
import type { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  buildWhereClause(data: Optional<User>) {
    return {
      ...(data?.id && { id: data.id }),
      ...(data?.publicId && { publicId: data.publicId }),
      ...(data?.email && { email: data.email }),
    };
  }

  find(args?: Optional<User>) {
    const where = this.buildWhereClause(args);

    return this.prismaService.user.findMany({ where });
  }

  findOne(args: Optional<User>) {
    const where = this.buildWhereClause(args);

    return this.prismaService.user.findFirst({ where });
  }

  create(data: Partial<Product>) {
    return this.prismaService.product.create({
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image || '',
        stock: data.stock || 0,
        userid: data.userid,
      },
    });
  }

  update(data: Partial<Product>) {
    return this.prismaService.product.update({
      where: { id: data.id },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image || '',
        stock: data.stock || 0,
      },
    });
  }

  delete(id: bigint) {
    return this.prismaService.product.delete({ where: { id } });
  }
}
