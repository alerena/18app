import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { MenuController } from 'ionic-angular';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = 'HomePage';
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public menu: MenuController) {
    this.menu.enable(true, "menu");
  }
}
