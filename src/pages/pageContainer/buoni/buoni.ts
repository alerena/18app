import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BuoniService } from '../../../services/buoni.service';
import {Buoni} from '../../../models/buoni';


@IonicPage()
@Component({
  selector: 'page-buoni',
  templateUrl: 'buoni.html',
  providers: [BuoniService]
})
export class BuoniPage {
  segment : string;
  data : Array<any>;
  currentData : Array<any>;
  //
  constructor(public navCtrl: NavController, public navParams: NavParams, private _buoniService: BuoniService){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BuoniPage');

    this._buoniService.retrieveData().then((data)=>{
      this.data = JSON.parse(""+data);
      this.currentData = JSON.parse(""+data);
    });
  }
  segmentChanged(event){
    this.currentData = this.getBuoniFiltered(this.segment);
  }
    getBuoniFiltered(filter){
      if(filter!= 'all'){
        return this.data.filter(x => x.status === filter);
      }else{
        return this.data;
      }
    }
    itemSelected(item){
      //console.log(item);
      this.navCtrl.push("DettaglioBuoniPage", {
          dettaglio : item      
      });

    }
}
