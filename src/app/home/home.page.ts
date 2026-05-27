import { Task } from '../model/task.model';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent],
})


export class HomePage {

  task: Task[] = [{
    id: 1,
    titulo: 'Configuracion de Ionic',
    descripcion: 'Instalar Node, Angular y tambien Ionic',
    finalizado: false,
    prioridad: 'alta'
  },

  {
    id: 2,
    titulo: 'Aprender Angular',
    descripcion: 'Aprender los conceptos basicos de Angular',
    finalizado: false,
    prioridad: 'media'
  },];


  constructor() {
    console.log('Lista de tareas:');
    console.log(this.task);

  }
}
