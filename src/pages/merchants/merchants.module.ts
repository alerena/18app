import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantsPage } from './merchants';
import {NearbyComponent} from './nearby/nearby.component'
import {MerchantDetailPageModule} from './merchant-detail/merchant-detail.module';
//import {MerchantDetailPageComponent} from './merchant-detail/merchant-detail';

@NgModule({
  declarations: [
    MerchantsPage, 
    NearbyComponent, 
   // MerchantDetailPageComponent
  ],
  imports: [
   // MerchantDetailPageModule,
    IonicPageModule.forChild(MerchantsPage)
    //IonicPageModule.forChild(MerchantDetailComponent),
  ]  
})
export class MerchantsPageModule {
  
}
