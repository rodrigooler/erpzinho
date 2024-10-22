import type { Product } from '@prisma/client';

export class SearchProductDto implements Partial<Product> {
  id?: bigint;
  name?: string;
}

export class CreateProductDto implements Partial<Product> {
  name: string;
  description: string;
  price: number;
}

export class UpdateProductDto extends CreateProductDto {
  id: bigint;
}
