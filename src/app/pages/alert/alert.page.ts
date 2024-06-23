import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertCtrl:AlertController) { }

  ngOnInit() {
  }

  alertButtons = ['Action'];

  async presentAlert(){
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Subheader',
      backdropDismiss: false,
      message: 'Este es un mensaje de la alerta',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlertMultipleButtons(){
    const alert = await this.alertCtrl.create({
      header: 'Alerta',
      subHeader: 'Multiples botones',
      backdropDismiss: false,
      message: 'Este es un mensaje de la alerta',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Clic en ok');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo'
        },
      ]
    });
    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Nombre'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Nombre'
        },
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'https://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
        {
          name: 'name4',
          type: 'date',
          min: '2017-03-01',
          max: '2024-06-20'
        },
        {
          name: 'name5',
          type: 'date',
          min: '2017-03-01',
          max: '2024-06-20'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 50
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 4,
            inputmode: 'decimal'
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Ok',
          handler: ( data:any ) => {
            console.log(data);
          }
        },
      ]
    });

    await alert.present();
  }

}
