import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Merchant} from '../../../models/merchant.model'

@IonicPage()
@Component({
  selector: 'merchant-detail',
  templateUrl: 'merchant-detail.html',
})
export class MerchantDetailPageComponent{
  private merchant: Merchant;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad merchant');
  }

}