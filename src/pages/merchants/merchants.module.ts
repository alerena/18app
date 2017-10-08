import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MerchantsPage } from './merchants';
import {NearbyComponent} from './nearby/nearby.component'
import {MerchantDetailPageModule} from './merchant-detail/merchant-detail.module';
import {InternetComponent} from './internet/internet.component';
import {MerchantTypePipe} from './internet/merchantType.pipe';
import {SearchComponent} from './search/search.component';
//import {MerchantDetailPageComponent} from './merchant-detail/merchant-detail';

@NgModule({
  declarations: [
    MerchantsPage, 
    NearbyComponent, 
    InternetComponent,
    MerchantTypePipe,
    SearchComponent
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
