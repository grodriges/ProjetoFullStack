import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-LogicaProgramacao',
  templateUrl: './LogicaProgramacao.component.html',
  styleUrls: ['./LogicaProgramacao.component.css']
})
export class LogicaProgramacaoComponent implements OnInit {

  somaNum1 = 0;
  somaNum2 = 0;
  constructor() { }

  ngOnInit() {
    this.SomaNumerosNaturas();
  }

  SomaNumerosNaturas(){
    const num1 = 3;
    const num2 = 5;

    for (let indexnum1 = 1; indexnum1 < 1000; indexnum1++) {
      if (indexnum1 % num1 === 0) {
        this.somaNum1 += indexnum1;
      }
    }

    for (let indexnum2 = 1; indexnum2 < 1000; indexnum2++) {
      if (indexnum2 % num2 === 0) {
        this.somaNum2 += indexnum2;
      }
    }
  }

}
