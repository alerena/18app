import { Component } from '@angular/core';
import { IonicPage, 
  NavController, NavParams } from 'ionic-angular';
import {Merchant} from '../../../models/merchant.model'

@IonicPage()
@Component({
  selector: 'merchant-detail',
  templateUrl: 'merchant-detail.template.html',
})
export class MerchantDetailPageComponent{
  public merchant: Merchant;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.merchant = this.navParams.get('merchant');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad merchant');
    console.log(this.navParams)
    //this.merchant = this.navParams.get('merchant');
  }

}