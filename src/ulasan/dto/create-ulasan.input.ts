
import { InputType, Field, Int } from '@nestjs/graphql';
import {
  IsInt,
  IsString,
  Min,
  Max,
  MinLength,
  MaxLength,
} from 'class-validator';

@InputType()
export class CreateUlasanInput {
  @Field(() => Int)
  @IsInt()
  @Min(1)
  destinasiId: number;

  @Field(() => Int)
  @IsInt()
  @Min(1)
  @Max(5)
  rating: number;

  @Field()
  @IsString()
  @MinLength(1)
  @MaxLength(1000)
  komentar: string;
}
