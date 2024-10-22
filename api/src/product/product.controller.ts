import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import type { CreateProductDto, SearchProductDto } from './product.dto';
import { ProductService } from './product.service';

@Controller('products')
@UseGuards(AuthGuard)
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findOne(@Query() query: SearchProductDto) {
    return this.productService.findOne(query);
  }

  @Get('search')
  findMany(@Query() query: SearchProductDto) {
    return this.productService.find(query);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Request() req) {
    return this.productService.create({
      ...createProductDto,
      userid: req.user.id,
    });
  }

  @Put()
  update(@Body() createProductDto: CreateProductDto) {
    return this.productService.update(createProductDto);
  }

  @Delete()
  delete(@Query('id') id: bigint) {
    return this.productService.delete(id);
  }
}
