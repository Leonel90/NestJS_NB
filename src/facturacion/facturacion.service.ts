import { Injectable } from '@nestjs/common';

@Injectable()
export class FacturacionService {
    
    private materia = [
        {id : '1', nombre: 'Matematica', profesor: 'Luis'},
        {id : '2', nombre: 'Lenguaje', profesor: 'Pedro'},
        {id : '3', nombre: 'Biologia', profesor: 'Ana'}
    ];
}
