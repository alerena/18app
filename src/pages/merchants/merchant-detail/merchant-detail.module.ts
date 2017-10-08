 import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {MerchantDetailPageComponent} from './merchant-detail';

@NgModule({
  declarations: [
    MerchantDetailPageComponent
  ],
  imports: [
    IonicPageModule.forChild(MerchantDetailPageComponent)
  ] ,
  exports: [MerchantDetailPageComponent]
})
export class MerchantDetailPageModule {
  
} 