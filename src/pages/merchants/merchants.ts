import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import {MerchantDetailPageComponent} from './merchant-detail/merchant-detail'
import {Merchant} from '../../models/merchant.model'
import {MerchantsService} from './merchants.service';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-merchants',
  templateUrl: 'merchants.html',
  providers: [MerchantsService, UserService]
})
export class MerchantsPage {
  private merchants: Array<Merchant>;
  public section : string = 'nearby';
  public user: User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public merchantsService: MerchantsService, public userService: UserService, public menu: MenuController) {
    this.user = new User();
    this.userService.retrieveUser().then((user: User) => {
      this.user = user;
    });
  }

  ionViewDidLoad() {
    this.merchants = this.merchantsService.getMerchants();
    console.log('ionViewDidLoad Merchants - page')
  }

  public openMenu(){
    let m = this.menu.get('menu');
    m.open();
  }

/* 
  onMerchantSelect(merchant){
    console.log(JSON.stringify({}))
       this.navCtrl.push('MerchantDetailPageComponent', {
      merchant: merchant
    });   
  } */

}
