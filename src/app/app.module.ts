import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/*import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';*/
import { TabsPage } from '../pages/pageContainer/tabs/tabs';
import { BuoniPage } from '../pages/pageContainer/buoni/buoni';
import { DettaglioBuoniPage } from '../pages/dettaglio-buoni/dettaglio-buoni';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    TabsPage
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
    TabsPage
    /*AboutPage,
    ContactPage,
    TabsPage
    BuoniPage*/
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
