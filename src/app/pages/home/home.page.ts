import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
        IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
        IonItem, IonLabel, IonInput, IonList, IonIcon } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { Task } from '../../model/task.model';
import { FormsModule } from '@angular/forms'; 
import {addIcons} from 'ionicons'
import {addOutline} from 'ionicons/icons'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, IonItem, IonLabel, IonInput, FormsModule, IonList,
  IonButton, IonIcon],
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
    addIcons({addOutline});
    console.log('Lista de tareas:');
    console.log(this.task);

  }

  addTask() {

  console.log(this.newTaskStr);

  const titulo = this.newTaskStr.trim();

  if (!titulo) {
    alert('La tarea no puede estar vacía');
    return;
  }

  const existe = this.task.some(
    tarea => tarea.titulo.trim().toLowerCase() === titulo.toLowerCase()
  );

  if (existe) {
    alert('Ya existe una tarea con ese nombre');
    return;
  }

  const newTask: Task = {
    id: Date.now(),
    titulo: titulo,
    descripcion: '',
    finalizado: false,
  };

  this.task.push(newTask);

  console.log(this.task);

  this.newTaskStr = '';

  console.log('Tarea agregada:', newTask);
}
  
}
