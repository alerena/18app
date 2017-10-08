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
  selector: 'search',
  templateUrl: 'search.template.html',
  providers: [MerchantsService],
})
export class SearchComponent implements OnInit {

  private merchants: Merchant[]
  public filter;
  public show = true;

  constructor(private merchantsService: MerchantsService, public navCtrl: NavController, public navParams: NavParams) { 
    this.filter = {
        type :  0
    };
  }

  ngOnInit() {
    console.log('search init')
   console.log(this.merchantsService.getMerchants())
    this.merchants = []// this.merchantsService.getMerchants(); 
  }

  onSearch(filter){
    this.show = !this.show;
    //get filtered list
    this.merchants = this.merchantsService.getFilteredMerchants(filter);
  }

  showSearch(){
    this.show = !this.show;
  }

  onMerchantSelect(merchant) {
    console.log(merchant)
    this.navCtrl.push("MerchantDetailPageComponent", {
      merchant: merchant
    });
  }

}
