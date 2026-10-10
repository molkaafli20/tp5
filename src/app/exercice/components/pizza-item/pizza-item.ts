import { Component, input, output } from '@angular/core';
import { Pizza } from '../../models/pizza';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [DecimalPipe],
  selector: 'mol-pizza-item',
  styleUrl: './pizza-item.css',
  templateUrl: './pizza-item.html',
})
export class PizzaItem {
   pizza = input.required<Pizza>();
  supprimer = output<number>();
  onDelete() {
    this.supprimer.emit(this.pizza().id);
  }
}

