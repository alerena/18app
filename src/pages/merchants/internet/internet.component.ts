import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MerchantsService } from '../merchants.service';
import { Merchant } from '../../../models/merchant.model'
import { MerchantType } from '../../../models/merchantType.model'
import { NavController, NavParams } from 'ionic-angular';
import { MerchantDetailPageComponent } from '../merchant-detail/merchant-detail';
import {MerchantTypePipe} from './merchantType.pipe'

/**
 * Generated class for the NegoziPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'internet',
  templateUrl: 'internet.template.html',
  providers: [MerchantsService],
})
export class InternetComponent implements OnInit {

  private merchants: Merchant[]
  private filter: number = 0;
  constructor(private merchantsService: MerchantsService, public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    console.log('internet init')
    this.merchants = this.merchantsService.getMerchants();
  }

  onMerchantSelect(merchant) {
    console.log(merchant)
    this.navCtrl.push("MerchantDetailPageComponent", {
      merchant: merchant
    });
  }

}
