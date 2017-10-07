import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import {UserPlatfondComponent} from './userPlatfond/user-platfond.component';
import {AboutPage} from '../about/about';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UserService]
})
export class HomePage {

  public user: User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService) {
    this.user = new User();
    this.userService.retrieveUser().then((user: User) => {
      this.user = user;
      console.log(this.user);
    });
  }

  goPl(){
    this.navCtrl.push(UserPlatfondComponent)
  }

  public go(){
    this.navCtrl.push(AboutPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
