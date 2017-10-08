import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { MenuController, IonicPage} from 'ionic-angular';

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'HomePage';
  tab2Root = 'MerchantsPage';
  tab4Root = 'BuoniPage'

  constructor(public menu: MenuController) {
    this.menu.enable(true, "menu");
  }
}
