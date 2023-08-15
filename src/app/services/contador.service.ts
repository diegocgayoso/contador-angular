import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContadorService {

  constructor() { }

  contador: number = 5000;
  // increment() {
  //   this.contador++;
  // }
  // decrement() {
  //   this.contador--;
  // }

  sum(valor: number){
    this.contador += valor
  }
}
