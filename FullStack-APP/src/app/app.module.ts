import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayComComponent } from './ArrayCom/ArrayCom.component';
import { FuncaoRecursivaComponent } from './FuncaoRecursiva/FuncaoRecursiva.component';
import { LogicaProgramacaoComponent } from './LogicaProgramacao/LogicaProgramacao.component';

@NgModule({
   declarations: [
      AppComponent,
      ArrayComComponent,
      FuncaoRecursivaComponent,
      LogicaProgramacaoComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
