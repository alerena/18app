import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
<<<<<<< HEAD
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
=======

/*import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';*/
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import {MerchantDetailComponent} from '../pages/merchants/merchant-detail/merchant-detail.component'

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
   MerchantDetailComponent
    /*AboutPage,
    ContactPage,
    TabsPage
    BuoniPage*/
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    MerchantDetailComponent
    /*AboutPage,
    ContactPage,
    TabsPage
    BuoniPage*/
>>>>>>> 7320fcbb491ceafc8f002527c36028085e6505a9
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
