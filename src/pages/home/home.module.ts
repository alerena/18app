import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule, IonicPage } from 'ionic-angular';
import { HomePage } from './home';
import {HomeDetailPageModule} from './homeDetail/home-detail.module';
@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    HomeDetailPageModule,
    IonicPageModule.forChild(HomePage),
  ],
  //exports: [HomePage]
})
export class HomePageModule {}

