import { Component } from '@angular/core';
import { InformationListModel } from './Body/information-list.model';
import { MenuItemModel } from './Body/menu-item.model';
import { mock_menu_list } from './Body/mock-menu-list';
import { mock_information_list } from './Body/mock_information_list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dunkin-donuts';
  menu: MenuItemModel[] = [];
  informations: InformationListModel[] = [];

  constructor() {
    for(var products of mock_menu_list){
      console.log(products)
      this.menu.push(products);
    }

    for(var information of mock_information_list){
      console.log(information)
      this.informations.push(information);
    }
  }
}
