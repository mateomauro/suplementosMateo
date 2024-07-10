import { Component, OnInit } from '@angular/core';
import { Suplemento } from './suplemento';
import {SuplementoCartService} from "../suplemento-cart.service";
import {SuplementoDataService} from "../suplemento-data.service";


@Component({
  selector: 'app-suplementos-lista',
  templateUrl: './suplementos-lista.component.html',
  styleUrls: ['./suplementos-lista.component.scss'] 
})

export class SuplementosListaComponent implements OnInit {

  suplementos: Suplemento[] = [];

  addToCart(suplemento:Suplemento): void {
    this.cart.addToCart(suplemento)
    suplemento.stock -= suplemento.quantity;
    suplemento.quantity = 0;
  }

  constructor(
    private cart : SuplementoCartService, 
    private suplementosDataService: SuplementoDataService)  {
  }

  ngOnInit(): void {
    this.suplementosDataService.getAll()
    .subscribe((suplementos: Suplemento[]) => this.suplementos = suplementos)
  }


}
export { Suplemento };

