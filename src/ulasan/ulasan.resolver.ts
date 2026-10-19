
import { Resolver, Mutation, Args, Int } from '@nestjs/graphql';
import { PrismaService } from '../prisma/prisma.service';
import { Ulasan } from './entities/ulasan.entity';
import { CreateUlasanInput } from './dto/create-ulasan.input';

@Resolver(() => Ulasan)
export class UlasanResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation(() => Ulasan, { name: 'tambahUlasan' })
  async tambahUlasan(
    @Args('input') input: CreateUlasanInput,
  ) {
    console.log('INPUT ULASAN:', input);

    return this.prisma.ulasan.create({
      data: {
        destinasiId: (input.destinasiId),
        rating: (input.rating),
        komentar: (input.komentar),
      },
    });
  }
}
