import { Component, Input, OnInit } from '@angular/core';
import { Suplemento } from '../suplementos-lista/suplemento';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent implements OnInit {
  constructor() { }

  @Input()
  suplemento !: Suplemento;

  ngOnInit(): void {
  }

  upQuantity(suplemento: Suplemento): void {
    if (suplemento.quantity < suplemento.stock) {
      suplemento.quantity++;
    }
  }

  downQuantity(suplemento: Suplemento): void {
    if (suplemento.quantity > 0) {
      suplemento.quantity--;
    }
  }
  ChangeQuantity(event: Event, suplemento: Suplemento): void {
    const inputNumber = parseInt((event.target as HTMLInputElement).value, 10);

    if (!isNaN(inputNumber)) {
      // Si el valor ingresado es un número válido
      if (inputNumber >= 0) {
        // Asegúrate de que el número no sea negativo
        suplemento.quantity = Math.min(inputNumber, suplemento.stock);
        // Establece la cantidad como el mínimo entre el valor ingresado y el stock disponible
      } else {
        // Si el número es negativo o no válido, establece la cantidad en 0
        suplemento.quantity = 0;
      }
    } else {
      // Si no se ingresó un número válido, establece la cantidad en 0
      suplemento.quantity = 0;
    }
  }




}
