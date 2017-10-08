import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Buoni } from '../../models/buoni';
@IonicPage()
@Component({
  selector: 'page-dettaglio-buoni',
  templateUrl: 'dettaglio-buoni.html',
})
export class DettaglioBuoniPage {
  dettaglio : Buoni;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DettaglioBuoniPage');
    console.log(this.dettaglio);
  }

}
