import { Component } from '@angular/core';
import { MenuItemModel } from './Body/menu-item.model';
import { mock_menu_list } from './Body/mock-menu-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dunkin-donuts';
  menu: MenuItemModel[] = [];

  constructor() {
    for(var products of mock_menu_list){
      console.log(products)
      this.menu.push(products);
    }
  }
}
