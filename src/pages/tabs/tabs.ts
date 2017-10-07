import { Component } from '@angular/core';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { BuoniPage } from '../buoni/buoni';
import {MenuController} from 'ionic-angular';
import {MerchantsPage} from '../merchants/merchants';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'HomePage';
  tab2Root= 'BuoniPage';
  tab3Root = 'MerchantsPage' ;
  tab4Root = AboutPage;
  

  constructor(private menu: MenuController) {
    this.menu.enable(true, 'menu')
  }
}
