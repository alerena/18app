import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  public configBackground: Array<{background_img: string, text: string}>;
  public actualBack: {background_img: string, text: string};

  constructor(public menu: MenuController, public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.menu.enable(false, 'menu');
    this.configBackground = [{
      background_img: 'background-overlay concert',
      text: 'concerti'
    },{
      background_img: 'background-overlay book',
      text: 'libri'
    },{
      background_img: 'background-overlay cinema',
      text: 'cinema'
    }]
    let i = 0;
    this.actualBack = this.configBackground[i];
    
    setInterval(() => {
      i = (i == 2) ? 0 : i+1;
      this.actualBack = this.configBackground[i];
    }, 6000)
  }

  ionViewDidLoad(){
    console.log("LOGIN ION");
  }


  public login(){
    this.events.publish("login");
    //this.navCtrl.setRoot(TabsPage); 
  }

}
