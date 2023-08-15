import { Component, OnInit } from '@angular/core';
import { ContadorService } from 'src/app/services/contador.service';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.scss']
})
export class ContadorComponent  {
  constructor(
    public contadorService: ContadorService
){}

  // increment(){
  //   this.contadorService.increment()
  // }
  // decrement(){
  //   this.contadorService.increment()
  // }
}
