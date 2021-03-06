import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MerchantsService } from '../merchants.service';
import { Merchant } from '../../../models/merchant.model'
import { NavController, NavParams } from 'ionic-angular';
import { MerchantDetailPageComponent } from '../merchant-detail/merchant-detail';

@Component({
  selector: 'nearby',
  templateUrl: 'nearby.template.html',
  providers: [MerchantsService],
})
export class NearbyComponent implements OnInit {

  private merchants: Merchant[]

  constructor(private merchantsService: MerchantsService, public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    console.log('nearby init')
    console.log(this.merchantsService.getMerchants())
    this.merchants = this.merchantsService.getMerchants();
  }

  onMerchantSelect(merchant) {
    console.log(merchant)
    this.navCtrl.push("MerchantDetailPageComponent", {
      merchant: merchant
    });
  }

}
