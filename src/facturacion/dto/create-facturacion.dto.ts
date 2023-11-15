import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateFacturaDto {

    @IsString()
    readonly nombre: string;
    
    @IsString()
    @MinLength(3)
    readonly placa: string;

    @IsString()
    @IsOptional()
    readonly detalle?: string;
}