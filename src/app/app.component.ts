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
  menus: MenuItemModel[] = [];

  constructor() {
    for(var menu of mock_menu_list){
      console.log(menu)
      this.menus.push(menu);
    }
  }
}
