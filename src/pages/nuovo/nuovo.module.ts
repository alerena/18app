import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuovoPage } from './nuovo';

@NgModule({
  declarations: [
    NuovoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuovoPage),
  ],
})
export class NuovoPageModule {}
