import { Module } from '@nestjs/common';
import { FacturacionController } from './facturacion.controller';

@Module({
  controllers: [FacturacionController]
})
export class FacturacionModule {}
