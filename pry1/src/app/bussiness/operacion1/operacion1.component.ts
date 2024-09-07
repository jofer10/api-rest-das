import { Component } from '@angular/core';
import { OperacionService } from '../../services/operacion/operacion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-operacion1',
  templateUrl: './operacion1.component.html',
  styleUrl: './operacion1.component.css'
})
export class Operacion1Component {
  isModalVisible:boolean
  isModalVisibleError: boolean
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  mensaje: string;
  forms: NgForm
  errorMsg: String

  constructor(private operacionService: OperacionService){}

  realizarOperacion(form: NgForm) {
    console.log("Pasó.");
    console.log(this.num1,this.num2, this.num3, this.num4);

    this.operacionService.obtenerMayor(this.num1,this.num2, this.num3, this.num4).subscribe(
      res => {
        this.mensaje=res;
        console.log("Mensaje del mayor valor: "+res);
        this.showModal()
      },
      err => {
        // Personaliza los mensajes de error aquí
        if (err.status === 0) {
          this.errorMsg = 'No se pudo conectar con el servidor. Verifica tu conexión.';
        } else if (err.status === 500) {
          this.errorMsg = 'Error en el servidor. Intenta nuevamente más tarde.';
        } else if (err.status === 400) {
          this.errorMsg = 'Datos incorrectos enviados al servidor.';
        } else {
          this.errorMsg = 'Ocurrió un error desconocido.';
        }
        this.isModalVisibleError=true
        console.error("Error capturado:", this.errorMsg);
      }
    )
    this.forms=form
  }
  
  cambiarEstado() {
    this.operacionService.cambiarEstado(false)
    this.operacionService.reiniciarValores()
  }
  
  showModal() {
    this.isModalVisible = true;
  }

  hideModal() {
    this.isModalVisible = false;
    this.isModalVisibleError=false
    this.forms.reset()
    this.mensaje=''
  }
}
