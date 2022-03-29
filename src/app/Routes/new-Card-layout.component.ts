import { Component, OnInit } from "@angular/core";
import { InformationListModel } from "../Body/information-list.model";
import { InformationService } from "../Body/information.service";
import { MenuItemModel } from "../Body/menu-item.model";
import { MenuService } from "../Body/menu.service";
import { MenuLayoutModel } from "./MenuItemsPage/menu-layout.model";
import { MenuLayoutService } from "./MenuItemsPage/menu-layout.service";

@Component({
    selector: 'DD-new-Card-layout',
    templateUrl: 'new-Card-layout.component.html',
    styleUrls: ['new-Card-layout.component.css']
})

export class NewCardLayoutComponent implements OnInit {
    constructor(public ms: MenuLayoutService, public is: InformationService) { }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    addProduct(menu: MenuLayoutModel) {
        console.log("You clicked add card");
        console.log(menu);
        this.ms.addMenu(menu);
    }

    addInfo(info: InformationListModel) {
        console.log("You clicked add info");
        console.log(info);
        this.is.addInformation(info);
    }

}