import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, MenuController } from 'ionic-angular';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {BuoniService } from '../../services/buoni.service';
@IonicPage()
@Component({
  selector: 'page-nuovo',
  templateUrl: 'nuovo.html',
  providers: [UserService, BuoniService]
})
export class NuovoPage {
  public user: User;
  public categories: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, public events:Events, private buoniService: BuoniService, public menu: MenuController) {
    this.user = new User();
    this.userService.retrieveUser().then((user: User) => {
      this.user = user;
      this.events.publish('loaduser', this.user);
    });
    this.buoniService.getCategory().then((categories) => {
      this.categories = JSON.parse(""+categories);
    })
  }

  public openMenu(){
    let m = this.menu.get('menu');
    m.open();
  }


}