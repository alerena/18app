import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
 @Component({
  selector: 'our-header',
  templateUrl: 'header.html',
  providers: [UserService],
  inputs: ['title']
})
export class HeaderComponent {
  public user: User;
  title: string;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserService) {
    this.user = new User();
    this.userService.retrieveUser().then((user: User) => {
      this.user = user;
    });
  }

}