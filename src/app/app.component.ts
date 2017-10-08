import { Component, ViewChild } from '@angular/core';
import { Platform, Events, Nav, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import {User} from '../models/user';
@Component({
  templateUrl: 'app.html',
  providers: [Keyboard]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  rootPage:any;
  user: User
  pages: Array<{title: string, component: any, icon: string}>;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, public keyboard: Keyboard, public events: Events, public menu: MenuController) {
    this.user = new User();
    this.pages = [
      { title: 'Profilo', component: 'ProfiloPage', icon: 'contact' },
      { title: 'Notifiche', component: 'NotificationPage', icon: 'notifications' },
      { title: 'Logout', component: 'LoginPage', icon: 'exit' }
    ];

    this.events.subscribe('login', () => {
      this.rootPage = 'TabsPage';
    });

    this.events.subscribe('loaduser', (user) => {
      this.user = user;
    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.initializeApp()
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



  private initializeApp() {
    this.platform.ready().then(() => {
      //this.networkSingleton.isConn = (Network.type === "none") ? false : true;
      this.keyboard.hideKeyboardAccessoryBar(false);
      this.rootPage = 'LoginPage';
      /*this.events.subscribe('user:login', currentUser => {
        this.user = currentUser;
      });*/

      /*this.platform.registerBackButtonAction(() => {
        const overlay = this.app._appRoot._overlayPortal.getActive();
        const nav = this.app.getActiveNav();

        if(overlay && overlay.dismiss) {
          overlay.dismiss();
        } else if(nav.canGoBack()){
          nav.pop();
        } else if(Date.now() - this.lastBack > 500) {
          if(nav.getActive().id != this.networkSingleton.homeName){
            nav.setRoot('Home');
          }else{
            let alert = this.alertCtrl.create({
              title: this.translate.instant('app.close'),
              message: this.translate.instant('app.closeMessageAlert'),
              buttons: [{
                text: this.translate.instant('app.no')
              },{
                text: this.translate.instant('app.yes'),
                handler: () => {
                  this.platform.exitApp();
                }
              }]
            });
            alert.present();
          }
        }
        this.lastBack = Date.now();
      });*/
        //this.chooseLang();    
    });
  }


  public openPage(page){
    this.menu.close();
    if(page.component == 'LoginPage'){
      this.rootPage = "LoginPage";
      this.nav.setRoot(page.component);
    }else{
      this.nav.push(page.component);
    }
  }
}
