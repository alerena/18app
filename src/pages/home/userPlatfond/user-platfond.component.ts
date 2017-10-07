import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from '../../../models/user';

@Component({
  selector: 'user-platfond',
  templateUrl: 'user-platfond.template.html'
})
export class UserPlatfondComponent {

  public user: User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("CIAO");
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad platfond');
  }

}
