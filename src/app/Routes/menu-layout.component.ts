import { Component, Input, OnInit } from "@angular/core";
import { MenuLayoutModel } from "./MenuItemsPage/menu-layout.model";
import { MenuLayoutService } from "./MenuItemsPage/menu-layout.service";
import { mock_menu_layout_list } from "./MenuItemsPage/mock_menu_layout_list";

@Component({
    selector: 'DD-menu-layout',
    templateUrl: 'menu-layout.component.html',
    styleUrls: ['menu-layout.component.css']
})

export class MenuLayoutComponent implements OnInit {
    menuLayouts: MenuLayoutModel[] = [];

    constructor(private menuLayoutService:MenuLayoutService) {
    //    for(var menuLayout of mock_menu_layout_list) {
    //         console.log(menuLayout)
    //         this.menuLayouts.push(menuLayout);
    //     }
    }
    ngOnInit(): void {
        this.menuLayoutService.getMenuLayout().subscribe(data => {
            console.log("Fetching menuLayout data");
            for (var menuLayout of data) {
                console.log(menuLayout);
                this.menuLayouts.push(menuLayout);
            }
        })

    }

}