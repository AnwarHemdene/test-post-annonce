import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(private alertCtrl: AlertController) {}


presentPrompt() {
  let alert = this.alertCtrl.create({
    title: 'Annonce',
    inputs: [
      {
        name: "Titre d'annonce",
        placeholder: 'Titre'
      },
      {
        name: "Description d'annonce",
        placeholder: 'Description',
        type: 'text'
      }
    ],
    buttons: [
      {
        text: 'Upload Image',
        role: 'send',
        handler: data => {
          console.log('image uploaded');
        }
      },{
        text: 'Position',
        role: 'send',
        handler: data => {
          console.log('position chosed');
        }
      },
      {
        text: 'Publish',
        handler: data => {
          console.log('announce published');
        }
      }
    ]
  });
  alert.present();
}




}
