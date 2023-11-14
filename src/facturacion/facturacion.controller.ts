import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { FacturacionService } from './facturacion.service';

@Controller('facturacion')

export class FacturacionController {


    constructor(private facturacionService: FacturacionService) {

    }

    @Get()
    getAllPlacas() {
        return this.facturacionService.getAll();
    }

    // para llamar por un id especifico
    @Get(':id')
    async find(@Param('id', ParseIntPipe) id: number) {
        return this.facturacionService.getById(id);// llamar nombre del dato con el + para trasnformar a string
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createVehiculo(
        @Body() body,
    ) {
        this.facturacionService.insert(body);
    }

    @Put(':id')
    update(
        @Param('id') id: number,
        @Body() body,
    ){
        return this.facturacionService.update(id, body);
    }


    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') id: number) {
        this.facturacionService.delete(id);
    }
}
