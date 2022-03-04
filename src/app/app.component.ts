import { Component, OnInit } from '@angular/core';
import { InformationListModel } from './Body/information-list.model';
import { MenuItemModel } from './Body/menu-item.model';
import { MenuService } from './Body/menu.service';
import { mock_menu_list } from './Body/mock-menu-list';
import { mock_information_list } from './Body/mock_information_list';
import { MenuLayoutModel } from './Routes/MenuItemsPage/menu-layout.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dunkin-donuts';
  menus: MenuItemModel[] = [];


  constructor(private menuService:MenuService) {
    // for(var menu of mock_menu_list){
    //   console.log(menu)
    //   this.menus.push(menu);
    // }
  }

  ngOnInit(): void {
      this.menuService.getMenu().subscribe(data => {
        console.log("Fetching menu data");
        for (var menu of data) {
          console.log(menu);
          this.menus.push(menu);
      }
      })
  }
}
