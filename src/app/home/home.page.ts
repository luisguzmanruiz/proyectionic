import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
        IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
        IonItem, IonLabel, IonInput, IonList } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { Task } from '../model/task.model';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonItem, IonLabel, IonInput, FormsModule, IonList],
})


export class HomePage {

    newTaskStr: string = '';

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

  addTask() {
    console.log(this.newTaskStr);
    const newTask: Task = {
      id: Date.now(), // Usamos el timestamp como ID único
      titulo: this.newTaskStr,
      descripcion: '',
      finalizado: false,
    };
    this.task.push(newTask);
    console.log(this.task);
    this.newTaskStr = ''; // Limpiamos el input después de agregar la tarea
    console.log('Tarea agregada:', newTask);
  }
  
}
