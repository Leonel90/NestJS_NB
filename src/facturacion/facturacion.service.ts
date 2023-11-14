import { Get, Injectable, NotFoundException, Param } from '@nestjs/common';
import { Vehiculo } from './vehiculo/vehiculo.interface';

@Injectable()
export class FacturacionService {

    private dato: Vehiculo[] = [
        { id: 1, nombre: 'Audi', placa: 'TPC-7845', detalle: 'Placas nuevas' },
        { id: 2, nombre: 'Camaro', placa: 'PCH-5623', detalle: 'Cambio de plcas' },
        { id: 3, nombre: 'BMW', placa: 'CHT-4518', detalle: 'Requiere placas' }
    ];

    getAll() {
        return this.dato;
    }

    getById(@Param('id') id: number) {
        let datosVehiculo = this.dato.find(placas => placas.id === id);
        if (!datosVehiculo)
            throw new NotFoundException("NO existe registro solicitado")
        return datosVehiculo;
    }
}
