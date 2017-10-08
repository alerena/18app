import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Merchant} from '../../models/merchant.model'
import {MerchantsService} from './merchants.service';
/**
 * Generated class for the NegoziPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-merchants',
  templateUrl: 'merchants.html',
  providers: [MerchantsService]
})
export class MerchantsPage {
  private merchants: Array<Merchant>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public merchantsService: MerchantsService) {
  }

  ionViewDidLoad() {
    this.merchants = this.merchantsService.getMerchants();
    console.log('ionViewDidLoad Merchants - page');
  }

  test(){
    console.log(JSON.stringify({}))
       this.navCtrl.push('MerchantDetail', {
      merchant: {}
    });   
  }

  onMerchantSelect(){
    console.log(JSON.stringify({}))
       this.navCtrl.push('MerchantDetailPageComponent', {
      merchant: {}
    });   
  }

}
