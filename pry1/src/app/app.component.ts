import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  num1: number;
  num2: number;
  num3: number;
  num4: number;
  mensaje: string;

  constructor(private router: Router){}

  ngOnInit() {
    // Redirige a la ruta inicial cuando se recarga la página
    if (window.performance) {
      if (performance.navigation.type === 1) { //si el tipo de navegación es recarga ingresa a la condición
        this.router.navigate(['/inicio']); 
      }
    }
  }
}
