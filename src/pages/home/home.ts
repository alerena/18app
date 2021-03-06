import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, MenuController } from 'ionic-angular';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UserService]
})
export class HomePage {

  public user: User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, public events:Events, public menu: MenuController) {
    this.user = new User();
    this.userService.retrieveUser().then((user: User) => {
      console.log(user);
      this.user = user;
      this.events.publish('loaduser', this.user);
    });
  }

  public goToHome(){
    this.navCtrl.push('HomePage');
  }

  public openMenu(){
    let m = this.menu.get('menu');
    m.open();
  }

  public goToNuovo(){
    this.navCtrl.push('NuovoPage');
  }

}