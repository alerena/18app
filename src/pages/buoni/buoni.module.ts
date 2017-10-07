import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuoniPage } from './buoni';


@NgModule({
  declarations: [
    BuoniPage,
  ],
  imports: [
    IonicPageModule.forChild(BuoniPage)
  ],
})
export class BuoniPageModule {}
