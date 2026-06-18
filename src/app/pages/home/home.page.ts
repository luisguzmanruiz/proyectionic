import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
        IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, 
        IonItem, IonLabel, IonInput, IonList, IonIcon,
        IonItemSliding, IonItemOptions, IonItemOption,
        IonReorderGroup, IonReorder } from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { Task } from '../../model/task.model';
import { FormsModule } from '@angular/forms'; 
import { addIcons } from 'ionicons';
import { addOutline, trashOutline } from 'ionicons/icons';
import { AlertService } from '../../alert';

const TASKS_KEY = 'tasks';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
    IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton, 
    IonItem, IonLabel, IonInput, FormsModule, IonList, IonButton, IonIcon,
    IonItemSliding, IonItemOptions, IonItemOption,
    IonReorderGroup, IonReorder],
})
export class HomePage {

  newTaskStr: string = '';

  task: Task[] = [];

  constructor(private alertService: AlertService) {
    addIcons({ addOutline, trashOutline });
  }

  ionViewWillEnter() {
    const data = localStorage.getItem(TASKS_KEY);
    if (data) {
      this.task = JSON.parse(data);
    }
  }

  saveTasks() {
    localStorage.setItem(TASKS_KEY, JSON.stringify(this.task));
  }

  addTask() {
    const titulo = this.newTaskStr.trim();
    if (!titulo) return;

    const existe = this.task.some(
      t => t.titulo.trim().toLowerCase() === titulo.toLowerCase()
    );
    if (existe) {
      this.alertService.showAlert('Tarea duplicada', 'Ya existe una tarea con ese nombre');
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      titulo,
      descripcion: '',
      finalizado: false,
    };

    this.task.push(newTask);
    this.saveTasks();
    this.newTaskStr = '';
  }

  deleteTask(id: number) {
    this.task = this.task.filter(t => t.id !== id);
    this.saveTasks();
  }

  confirmDelete(id: number) {
    this.alertService.confirmAlert(
      'Eliminar tarea',
      '¿Estás seguro de que deseas eliminar esta tarea?',
      () => this.deleteTask(id)
    );
  }

  actualizarPosiciones(event: any) {
    this.task = event.detail.complete(this.task);
    this.saveTasks();
  }
}