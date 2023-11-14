import { Get, Injectable, NotFoundException, Param } from '@nestjs/common';
import { Factura } from './Interfaces/facturacion';

@Injectable()
export class FacturacionService {

    private Placa: Factura[] = [
        { id: 1, nombre: 'TDR-4578', detalle: 'Placas nuevas' },
        { id: 2, nombre: 'PHC-4512', detalle: 'Cambio de plcas' },
        { id: 3, nombre: 'RQT-4512', detalle: 'Requiere placas' }
    ];

    getAll() {
        return this.Placa;
    }

    getById(@Param('id') id: number) {
        let dato = this.Placa.find(placas => placas.id === id);
        if (!dato)
            throw new NotFoundException("NO existe registro solicitado")
        return dato;
    }
}
