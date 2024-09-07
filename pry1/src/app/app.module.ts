import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiOperacion } from './services/api/api.operacion.service';
import { OperacionService } from './services/operacion/operacion.service';
import { Operacion1Component } from './bussiness/operacion1/operacion1.component';
import { Operacion2Component } from './bussiness/operacion2/operacion2.component';
import { BussinessComponent } from './bussiness/bussiness.component';

@NgModule({
  declarations: [
    AppComponent,
    Operacion1Component,
    Operacion2Component,
    BussinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [importProvidersFrom(HttpClientModule), ApiOperacion, OperacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
