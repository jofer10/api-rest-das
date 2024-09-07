import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessComponent } from './bussiness/bussiness.component';
import { Operacion1Component } from './bussiness/operacion1/operacion1.component';
import { Operacion2Component } from './bussiness/operacion2/operacion2.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {
    path: 'inicio',
    component: BussinessComponent,
    children: [
      { path: 'operacion', component: Operacion1Component },
      { path: 'operacion1', component: Operacion2Component },
    ],
  },
  {path: '**', redirectTo: '/inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
