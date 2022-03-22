import { Component, OnInit } from "@angular/core";
import { MenuItemModel } from "../Body/menu-item.model";
import { MenuService } from "../Body/menu.service";

@Component({
    selector: 'DD-new-Card-layout',
    templateUrl: 'new-Card-layout.component.html',
    styleUrls: ['new-Card-layout.component.css']
})

export class NewCardLayoutComponent implements OnInit {
    constructor(public ms: MenuService) { }

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

    addProduct(menu: MenuItemModel) {
        console.log("You clicked add card");
        console.log(menu);
        this.ms.addMenu(menu);
    }

}