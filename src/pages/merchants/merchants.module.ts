import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantsPage } from './merchants';
import {NearbyComponent} from './nearby/nearby.component'
import { MerchantDetailPageModule } from './merchant-detail/merchant-detail.module';
@NgModule({
  declarations: [
    MerchantsPage, 
    NearbyComponent, 
  ],
  imports: [
    MerchantDetailPageModule,
    IonicPageModule.forChild(MerchantsPage)
  ],
})
export class MerchantsPageModule {}
