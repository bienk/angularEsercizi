import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import {   //Importare le funzionalità nella nostra applicazione
 FormsModule,
 ReactiveFormsModule
} from '@angular/forms';
@NgModule({
  providers: [],
  bootstrap: [AppComponent],
 imports: [

   FormsModule,  //Anche qui
   ReactiveFormsModule,
   
 ]




})
export class AppModule { }


