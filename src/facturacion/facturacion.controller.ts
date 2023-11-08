import { Controller, Get } from '@nestjs/common';

@Controller('facturacion')

export class FacturacionController {

    @Get()
    calcularNumero() {
        const make = [
            "Mazda", "Toyota", "BMW"
        ]
        return make
    }
}
