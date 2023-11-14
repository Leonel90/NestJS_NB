import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { FacturacionService } from './facturacion.service';

@Controller('facturacion')

export class FacturacionController {


    constructor(private facturacionService: FacturacionService){
        
    }
    /*@Get()
    obtenerMarcas() {
        const make = [
            "Mazda", "Toyota", "BMW"
        ]
        return make
    }*/

    @Get()
    getAllPlacas(){
        return this.facturacionService.getAll();
    }

    // para llamar por un id especifico
    @Get(':id')
    getById(@Param('id', ParseIntPipe) id: number){
        //return {id};// llamar numero de id
        return this.facturacionService.getById(id);// llamar nombre del dato con el + para trasnformar a string
    }
}
