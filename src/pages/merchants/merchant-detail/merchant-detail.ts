import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController} from 'ionic-angular';
import {Merchant} from '../../../models/merchant.model'
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/user';
@IonicPage()
@Component({
  selector: 'merchant-detail',
  templateUrl: 'merchant-detail.html',
  providers: [UserService]
})
export class MerchantDetailPageComponent{
  public merchant: Merchant;
  public user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, public menu: MenuController) {
    this.merchant = this.navParams.get('merchant');
    this.user = new User();
    this.userService.retrieveUser().then((user: User) => {
      this.user = user;
    });
  }

  public openMenu(){
    let m = this.menu.get('menu');
    m.open();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad merchant');
    console.log(this.navParams)
    //this.merchant = this.navParams.get('merchant');
  }

}