import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MerchantDetailPageComponent} from './merchant-detail/merchant-detail'
import {Merchant} from '../../models/merchant.model'
import {MerchantsService} from './merchants.service';

@IonicPage()
@Component({
  selector: 'page-merchants',
  templateUrl: 'merchants.html',
  providers: [MerchantsService]
})
export class MerchantsPage {
  private merchants: Array<Merchant>;
  public section: string = 'nearby';
  
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
       this.navCtrl.push(MerchantDetailComponent, {
      merchant: {}
    });   
  }

}
