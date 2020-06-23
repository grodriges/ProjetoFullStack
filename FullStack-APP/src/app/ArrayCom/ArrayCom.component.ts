import { Component, OnInit } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: 'app-ArrayCom',
  templateUrl: './ArrayCom.component.html',
  styleUrls: ['./ArrayCom.component.css']
})
export class ArrayComComponent implements OnInit {

  siglas = ['ES', 'MG', 'RJ', 'SP'];
  literal = ['São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Espírito Santo'];
  valores: {key: string, value: string}[] = new Array();
  constructor() { }

  ngOnInit() {

    for (const indexS of this.siglas){
      for (const index2 of this.literal) {
        let retorno = 0;
        if (indexS === 'MG' && index2 === 'Minas Gerais')  {
          retorno = this.valores.push({key: indexS, value: index2});
        }
        if (indexS === 'ES' && index2 === 'Espírito Santo')  {
          retorno = this.valores.push({key: indexS, value: index2});
        }
        if (indexS === 'RJ' && index2 === 'Rio de Janeiro')  {
          retorno = this.valores.push({key: indexS, value: index2});
        }
        if (indexS === 'SP' && index2 === 'São Paulo')  {
          retorno =  this.valores.push({key: indexS, value: index2});
        }
      }
    }

  }

}
