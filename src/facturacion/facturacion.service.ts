import { Injectable, NotFoundException, Param } from '@nestjs/common';
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

    insert(body: any) {
        this.dato = [
            ...this.dato,
            {
                id: this.lastId() + 1,
                nombre: body.nombre,
                placa: body.placa,
                detalle: body.detalle
            }
        ];
    }

    update(id: number, body: any) {
        let vehiculo: Vehiculo = {
            id,
            nombre: body.nombre,
            placa: body.placa,
            detalle: body.detalle,
        }
        this.dato = this.dato.map((item: Vehiculo) => {
            console.log(item, id, item.id == id);
            return item.id == id ? vehiculo : item;
        });
    }

    delete(@Param('id') id: number) {
        this.dato = this.dato.filter((item: Vehiculo) => item.id != id);
    }

    private lastId(): number {
        return this.dato[this.dato.length - 1].id
    }
}
