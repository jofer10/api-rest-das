import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OperacionService } from '../services/operacion/operacion.service';

@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrl: './bussiness.component.css',
})
export class BussinessComponent {
  estado: boolean = false
  valor: number
  contador: number=0;
  ultimoTipo: number | null = null;

  constructor(private router: Router, private operacionService: OperacionService) {
    // Inicializamos el estado a false para que se mantega en el componente que se llamo.
    // Si pasa a true significa que dio click 2 veces en el mismo botón para ocultar pero debe cumplir que el valor 3
    // Generado cuando el contador detecta que se presionó 2 veces el mismo botón.
    this.operacionService.cambiarEstado(this.estado)
    this.operacionService.obtenerValores(this.contador, this.ultimoTipo)
  }

  habilitar(tipo:number) {
    console.log(this.contador);
    
    // Esta condicional verifica si en caso el tipo es diferente del ultimo tipo seleccionado, debe inicializar nuevamente los valores
    if (tipo!==this.operacionService.tipo()) {
      this.operacionService.obtenerValores(0,null)
      // Cambiamos de estado y lo mandamos al servicio
      this.estado=false
      this.operacionService.cambiarEstado(this.estado)
    }
    
    // Obtenemos el incremeto
    this.contador=this.operacionService.incrementarContador()

    console.log("Entra 1: "+this.operacionService.getEstado());
    // Cambiamos el estado
    this.estado=!this.operacionService.getEstado();   
    // Insertamos nuevamente
    this.operacionService.cambiarEstado(this.estado) 
    
    // Si el contador llega a 2, significa que se hizo click 2 veces en el mismo boton
    // Tipo = 1 botón 1, Tipo = 2 botón 2
    if (this.contador===2) {
      this.valor=3
      this.contador=0
    }
    
    console.log(this.contador);
    console.log(this.estado);
    console.log(this.valor);

    console.log("Entra y termina aquí: "+this.operacionService.getEstado());
    //Si el ultimo estado fue false y el valor es 3 debe redirigir al inicio
    if ((!this.estado && this.valor === 3)) {
      this.router.navigate(['/inicio']);      
    }
    
    // insertamos el tipo por primera vez y si cambia de tipo en la parte de arriba está si es diferente del ultimo tipo clickeado debe inicializar
    this.ultimoTipo = tipo;
    this.operacionService.obtenerValores(this.contador, this.ultimoTipo)
    console.log("Tipo: "+this.ultimoTipo);
  }
}
