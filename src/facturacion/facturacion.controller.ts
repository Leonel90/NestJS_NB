import { Controller, Get } from '@nestjs/common';

@Controller('facturacion')

export class FacturacionController {

    /*@Get()
    obtenerMarcas() {
        const make = [
            "Mazda", "Toyota", "BMW"
        ]
        return make
    }*/

    @Get()
    obtenerPlacas(){
        const placas = [
            'PRX-7845','CHC-'
        ]
        return placas
    }

}
