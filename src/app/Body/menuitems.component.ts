import { Component } from "@angular/core";

@Component({
    selector: 'DD-menuitems',
    templateUrl: 'menuitems.component.html',
    styleUrls: ['menuitems.component.css']
})
export class MenuItemsComponent{
    img: string;
    header: string;
    statement: string;

    // img2: string;
    // header2: string;
    // statement2: string;

    // img3: string;
    // header3: string;
    // statement3: string;

    constructor() {
        this.img = "";
        this.header = "";
        this.statement = "";
    }
}