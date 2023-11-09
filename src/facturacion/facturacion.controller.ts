import { Controller, Get, Param } from '@nestjs/common';

@Controller('facturacion')

export class FacturacionController {

    /*@Get()
    obtenerMarcas() {
        const make = [
            "Mazda", "Toyota", "BMW"
        ]
        return make
    }*/
    private placas = ['PRX-7845','CHC-7859','TRC-7895'];
    @Get()
    getPlacas(){
        return this.placas;
    }
    // para llamar por un id especifico
    @Get(':id')
    
    getById(@Param('id') id: string){
        //return {id};// llamar numero de id
        return this.placas[id];// llamar nombre del dato
    }
}
