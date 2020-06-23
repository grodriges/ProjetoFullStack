import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-FuncaoRecursiva',
  templateUrl: './FuncaoRecursiva.component.html',
  styleUrls: ['./FuncaoRecursiva.component.css']
})
export class FuncaoRecursivaComponent implements OnInit {
  Resultado = 0;
  valores: number[] = new Array();
  constructor() { }

  ngOnInit() {
    this.valores = [2, 3, 10];
    this.getValores(this.valores);
  }

  mdc(a, b) {
    while (b !== 0){
      const r = a % b;
      a = b;
      b = r;
    }
    return a;
}

  getValores(Valores) {
     this.Resultado = Valores[0];
     let i;
     for (i = 1; i < Valores.length; i++) {
      this.Resultado = (this.Resultado * Valores[i]) / this.mdc(this.Resultado, Valores[i]);
    }
     return this.Resultado;
  }

}
