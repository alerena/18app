import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
  providers: [UserService]
})
export class NotificationPage {
  public user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService, public menu: MenuController) {
    this.user = new User();
    this.userService.retrieveUser().then((user: User) => {
      this.user = user;
    });
  }

  public openMenu(){
    let m = this.menu.get('menu');
    m.open();
  }

  public goToHome(){
    this.navCtrl.push('HomePage');
  }

}
