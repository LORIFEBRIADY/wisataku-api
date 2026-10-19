import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
} from 'class-validator';

export class CreateDestinasiDto {
  @ApiProperty({
    example: 'Pantai Tanjung Aan',
    description: 'Nama destinasi wisata',
  })
  @IsString()
  @IsNotEmpty()
  nama: string;

  @ApiProperty({
    example: 'Pantai',
    description: 'Kategori destinasi wisata',
  })
  @IsString()
  @IsNotEmpty()
  kategori: string;

  @ApiProperty({
    example: 'Lombok Tengah',
    description: 'Lokasi destinasi wisata',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  lokasi?: string;

  @ApiProperty({
    example: 10000,
    description: 'Harga tiket masuk dalam Rupiah',
  })
  @IsNumber()
  @Min(0)
  hargaTiket: number;
}