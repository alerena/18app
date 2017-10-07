import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantsPage } from './merchants';
import {NearbyComponent} from './nearby/nearby.component'
//import {MerchantDetailModule} from './merchant-detail/merchant-detail.module';
import {MerchantDetailComponent} from './merchant-detail/merchant-detail.component';

@NgModule({
  declarations: [
    MerchantsPage, 
    NearbyComponent, 
  //MerchantDetailComponent
  ],
  imports: [
    //MerchantDetailModule,
    IonicPageModule.forChild(MerchantsPage)
    //IonicPageModule.forChild(MerchantDetailComponent),
  ],
    /* entryComponents: [
   // MerchantsPage,
    MerchantDetailComponent
  ]    */
})
export class MerchantsModule {
  
}
