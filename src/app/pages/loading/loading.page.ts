import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  loading: HTMLIonLoadingElement;

  constructor(private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading("Hola...");

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingCtrl.create({
      message: mensaje
    });
    this.loading.present();
  }

}
