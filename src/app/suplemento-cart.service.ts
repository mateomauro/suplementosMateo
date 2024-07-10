import { Injectable } from '@angular/core';
import { Suplemento } from '../app/suplementos-lista/suplemento';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SuplementoCartService {
  private _cartList: Suplemento[] = [];

  cartList: BehaviorSubject<Suplemento[]> = new BehaviorSubject<Suplemento[]>([]);


  constructor() { }


  addToCart(suplemento: Suplemento) {
    let item: Suplemento = this._cartList.find((v1) => v1.name == suplemento.name)!;
    if(!item){ 
      this._cartList.push({... suplemento});
    }else {
      if(item.quantity < suplemento.stock){
        item.quantity += suplemento.quantity;
      }
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }
}
