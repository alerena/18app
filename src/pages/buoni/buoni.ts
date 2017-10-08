import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { BuoniService } from '../../services/buoni.service';
import {Buoni} from '../../models/buoni';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@IonicPage()
@Component({
  selector: 'page-buoni',
  templateUrl: 'buoni.html',
  providers: [BuoniService, UserService]
})
export class BuoniPage {
  segment : string;
  data : Array<any>;
  currentData : Array<any>;
  user: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _buoniService: BuoniService, private userService: UserService,public menu: MenuController){
    this.user = new User();
    this.userService.retrieveUser().then((user: User) => {
      this.user = user;
    });
    this._buoniService.retrieveData().then((data)=>{
      this.data = JSON.parse(""+data);
      this.currentData = JSON.parse(""+data);
    });
    this.segment = "all";
  }

  public openMenu(){
    let m = this.menu.get('menu');
    m.open();
  }

  ionViewDidLoad() {
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
    this.navCtrl.push("DettaglioBuoniPage", {
        dettaglio : item      
    });
  }
}
