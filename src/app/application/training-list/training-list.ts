import { Component, signal } from '@angular/core';
import { Training } from '../training';
import { TrainingItem } from '../training-item/training-item';

@Component({
  imports: [TrainingItem],
  selector: 'app-training-list',
  styleUrl: './training-list.css',
  templateUrl: './training-list.html',
})
export class TrainingList {
  trainingCatalog = signal<Training[]>([
{ id:125,name: 'Introduction à Angular', nbDays: 3, isFree: false },
{ id:587,name: 'Grid & Flexbox', nbDays: 3, isFree: true },
{ id: 879,name: 'Node JS avancé', nbDays: 4, isFree: false },
{ id:859,name: 'HTML5 & CSS', nbDays: 2, isFree: true }
])
ajouter() {
  const nouvelle: Training = {
    id: 10,
    name: 'Nouvelle formation',
    nbDays: 1,
    isFree: false
  };
  this.trainingCatalog.update(liste => [...liste, nouvelle]);
}
onRemoveTraining(idTraining: number) {
  this.trainingCatalog.update(formations =>
    formations.filter(f => f.id != idTraining)
  );
}
}
