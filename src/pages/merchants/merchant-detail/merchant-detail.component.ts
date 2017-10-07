import { Component } from '@angular/core';
import { IonicPage, 
  NavController, NavParams } from 'ionic-angular';
import {Merchant} from '../../../models/merchant.model'


@Component({
  selector: 'merchant-detail',
  templateUrl: 'merchant-detail.template.html',
})
export class MerchantDetailComponent{
  private merchant: Merchant;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad merchant');
   /*  console.log(JSON.stringify(this.navParams.get('merchant')))
    this.merchant = this.navParams.get('merchant'); */
  }

}