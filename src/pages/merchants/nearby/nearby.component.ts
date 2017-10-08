import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { MerchantsService } from '../merchants.service';
import { Merchant } from '../../../models/merchant.model'
import { NavController, NavParams } from 'ionic-angular';
import { MerchantDetailPageComponent } from '../merchant-detail/merchant-detail';

/**
 * Generated class for the NegoziPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'nearby',
  templateUrl: 'nearby.template.html',
  providers: [MerchantsService],
  /*entryComponents: [
     MerchantDetailComponent
   ]   */
})
export class NearbyComponent implements OnInit {

  private merchants: Merchant[]
  /* constructor(public navCtrl: NavController, public navParams: NavParams) {
 } */
  constructor(private merchantsService: MerchantsService, public navCtrl: NavController, public navParams: NavParams) { }

  /* ionViewDidLoad() {
    console.log('ionViewDidLoad NegoziPage');
  } */
  ngOnInit() {
    console.log('nearby init')
    console.log(this.merchantsService.getMerchants())
    this.merchants = this.merchantsService.getMerchants();
  }

  onMerchantSelect() {
    console.log(JSON.stringify({}))
    this.navCtrl.push("MerchantDetail", {
      merchant: {}
    });
  }

}
