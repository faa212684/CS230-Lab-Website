import { Component, Input } from "@angular/core";
import { MenuLayoutModel } from "./MenuItemsPage/menu-layout.model";
import { mock_menu_layout_list } from "./MenuItemsPage/mock_menu_layout_list";

@Component({
    selector: 'DD-menu-layout',
    templateUrl: 'menu-layout.component.html',
    styleUrls: ['menu-layout.component.css']
})

export class MenuLayoutComponent {
    menuLayouts: MenuLayoutModel[] = [];


    constructor() {
       for(var menuLayout of mock_menu_layout_list) {
            console.log(menuLayout)
            this.menuLayouts.push(menuLayout);
        }
    }

}