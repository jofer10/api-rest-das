import { Injectable } from "@angular/core";
import { ApiOperacion } from "../api/api.operacion.service";

@Injectable()
export class OperacionService {
    private estado:boolean
    private contador:number
    private ultimoTipo:any

    constructor(private api: ApiOperacion){}

    cambiarEstado(vl_estado:boolean) {
        this.estado=vl_estado;
    }

    obtenerValores(contador: number, ultimoTipo:number | null){
        this.contador=contador
        this.ultimoTipo=ultimoTipo
    }

    incrementarContador(){
        this.contador++
        return this.contador
    }

    tipo(){
        return this.ultimoTipo
    }

    reiniciarValores(){
        this.contador=0
        this.ultimoTipo=null
    }

    getEstado(){
        return this.estado;
    }

    obtenerMayor(num1: number, num2: number, num3: number, num4: number) {
        return this.api.getValorMayor(num1, num2, num3, num4);
    }

    obtenerSuma(num1: number, num2: number){
        return this.api.getSuma(num1, num2);
    }
}