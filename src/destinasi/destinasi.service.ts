
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '../generated/prisma/client';

@Injectable()
export class DestinasiService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(kategori?: string) {
    return this.prisma.destinasi.findMany({
      where: kategori ? { kategori } : undefined,
      orderBy: {
        id: 'asc',
      },
    });
  }

  async findOne(id: number) {
    const destinasi = await this.prisma.destinasi.findUnique({
      where: { id },
    });

    if (!destinasi) {
      throw new NotFoundException(
        `Destinasi dengan ID ${id} tidak ditemukan`,
      );
    }

    return destinasi;
  }

  async create(data: Prisma.DestinasiCreateInput) {
    return this.prisma.destinasi.create({
      data,
    });
  }

  async update(
    id: number,
    data: Prisma.DestinasiUpdateInput,
  ) {
    await this.findOne(id);

    return this.prisma.destinasi.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    await this.prisma.destinasi.delete({
      where: { id },
    });

    return {
      message: 'Destinasi berhasil dihapus',
    };
  }
}
