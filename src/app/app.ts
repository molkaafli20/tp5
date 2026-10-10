import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrainingList } from './application/training-list/training-list';
import { PizzaList } from './exercice/components/pizza-list/pizza-list';

@Component({
  imports: [RouterOutlet,TrainingList,PizzaList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tp5');
}
