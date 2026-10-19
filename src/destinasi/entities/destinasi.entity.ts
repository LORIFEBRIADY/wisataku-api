
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Ulasan } from '../../ulasan/entities/ulasan.entity';
import { Fasilitas } from '../../fasilitas/entities/fasilitas.entity';

@ObjectType()
export class Destinasi {
  @Field(() => Int)
  id: number;

  @Field()
  nama: string;

  @Field()
  kategori: string;

  @Field({ nullable: true })
  lokasi?: string;

  @Field(() => Float)
  hargaTiket: number;

  @Field(() => Float)
  ratingRata: number;

  @Field()
  createdAt: Date;

  @Field(() => [Ulasan])
  ulasan: Ulasan[];

  @Field(() => [Fasilitas])
  fasilitas: Fasilitas[];
}
