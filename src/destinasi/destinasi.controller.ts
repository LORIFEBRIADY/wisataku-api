import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { DestinasiService } from './destinasi.service';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@ApiTags('destinasi')
@Controller('destinasi')
export class DestinasiController {
  constructor(
    private readonly destinasiService: DestinasiService,
  ) {}

  // =====================================================
  // GET /destinasi
  // GET /destinasi?kategori=Pantai
  // =====================================================

  @Get()
  @ApiOperation({
    summary: 'Menampilkan semua destinasi',
  })
  @ApiResponse({
    status: 200,
    description: 'Daftar destinasi berhasil ditampilkan',
  })
  findAll(@Query('kategori') kategori?: string) {
    return this.destinasiService.findAll(kategori);
  }

  // =====================================================
  // GET /destinasi/:id
  // =====================================================

  @Get(':id')
  @ApiOperation({
    summary: 'Menampilkan destinasi berdasarkan ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Destinasi berhasil ditampilkan',
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.findOne(id);
  }

  // =====================================================
  // POST /destinasi
  // =====================================================

  @Post()
  @ApiOperation({
    summary: 'Menambahkan destinasi baru',
  })
  @ApiResponse({
    status: 201,
    description: 'Destinasi berhasil ditambahkan',
  })
  @ApiResponse({
    status: 400,
    description: 'Data destinasi tidak valid',
  })
  create(@Body() createDestinasiDto: CreateDestinasiDto) {
    return this.destinasiService.create(createDestinasiDto);
  }

  // =====================================================
  // PATCH /destinasi/:id
  // =====================================================

  @Patch(':id')
  @ApiOperation({
    summary: 'Mengubah sebagian data destinasi',
  })
  @ApiResponse({
    status: 200,
    description: 'Destinasi berhasil diperbarui',
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDestinasiDto: UpdateDestinasiDto,
  ) {
    return this.destinasiService.update(
      id,
      updateDestinasiDto,
    );
  }

  // =====================================================
  // DELETE /destinasi/:id
  // =====================================================

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({
    summary: 'Menghapus destinasi berdasarkan ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Destinasi berhasil dihapus',
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.destinasiService.remove(id);
  }
}