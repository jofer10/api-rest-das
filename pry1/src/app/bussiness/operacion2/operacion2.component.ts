import { Component } from '@angular/core';
import { OperacionService } from '../../services/operacion/operacion.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-operacion2',
  templateUrl: './operacion2.component.html',
  styleUrl: './operacion2.component.css'
})
export class Operacion2Component {
  isModalVisible:boolean
  isModalVisibleError:boolean
  num1: number;
  num2: number;
  mensaje: string;
  errorMsg: String
  forms: NgForm

  constructor(private operacionService: OperacionService){}

  realizarSuma(form: NgForm) {
    console.log("Pasó.");
    console.log(this.num1,this.num2);

    this.operacionService.obtenerSuma(this.num1,this.num2).subscribe(
      res => {
        this.mensaje=res;
        console.log("Mensaje del resultado de la suma: "+res);
        this.cambiarEstado()
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
    this.mensaje=''
    this.errorMsg=''
    this.forms.reset()
  }
}
