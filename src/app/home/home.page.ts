import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  n1='';
  n2='';
  nfinal=0;

  constructor(private alertController: AlertController) {}

  async AlertaDivisao0() {
    const alert = await this.alertController.create({
      header: 'Ops...',
      subHeader: 'Esta operação não existe.',
      message: 'Você está tentando fazer uma divisão por 0, porém está operação não existe.',
      buttons: ['Ok'],
    });
    alert.present();
  }


  somar(){
this.nfinal=parseFloat(this.n1)+parseFloat(this.n2);
  }

  subtrair(){
    this.nfinal=parseFloat(this.n1)-parseFloat(this.n2)
  }

  multiplicar(){
    this.nfinal=parseFloat(this.n1)*parseFloat(this.n2)
  }

  dividir(){
    if (parseFloat(this.n2)==0) {

      this.nfinal=0;
      this.AlertaDivisao0();
    //cria-se aqui a logica para falar que não existe divisão por 0//

    } else {

      this.nfinal=parseFloat(this.n1)/parseFloat(this.n2)
    }
  }

}
