import { Component, OnInit } from '@angular/core';
import {SuplementoCartService} from "../suplemento-cart.service";
import { Suplemento } from '../suplementos-lista/suplemento';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cartList$: Observable< Suplemento[]>

  constructor(private cart : SuplementoCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }

  
  ngOnInit(): void {
  }
}
