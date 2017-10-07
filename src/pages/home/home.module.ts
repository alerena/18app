import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {UserDetailComponent} from './userComp/user-detail.component';
import {UserPlatfondComponent} from './userPlatfond/user-platfond.component';
import {AboutPage} from '../about/about';
@NgModule({
  declarations: [
    HomePage,
    UserDetailComponent,
    UserPlatfondComponent,
    AboutPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
  entryComponents: [
    UserDetailComponent,
    UserPlatfondComponent,
    AboutPage
  ],
  exports: [
    UserPlatfondComponent
  ]
})
export class HomePageModule {}
