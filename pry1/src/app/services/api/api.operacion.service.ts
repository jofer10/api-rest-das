import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Response } from '../../interface/serve.models';

@Injectable()
export class ApiOperacion {
  constructor(private http: HttpClient) {}

  // API para operar
  getValorMayor(num1: number, num2: number, num3: number, num4: number) {
    return this.http.post<Response>("http://localhost:3000/api/operacion", {num1, num2, num3, num4})
    .pipe(map(res => res.body))
  }

  getSuma(num1: number, num2: number) {
    return this.http.post<Response>("http://localhost:3000/api/operacion/suma", {num1, num2})
    .pipe(map(res => res.body))
  }
}
