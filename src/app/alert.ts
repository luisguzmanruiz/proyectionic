import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertCtrl: AlertController) {}

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['Aceptar']
    });
    await alert.present();
  }

  async confirmAlert(
    header: string,
    message: string,
    functionOk: () => void,
    cancelText: string = 'Cancelar',
    confirmText: string = 'Aceptar'
  ) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: [
        {
          text: cancelText,
          role: 'cancel'
        },
        {
          text: confirmText,
          role: 'destructive',
          handler: () => {
            functionOk();
          }
        }
      ]
    });
    await alert.present();
  }
}
