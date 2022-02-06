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

    img2: string;
    header2: string;
    statement2: string;

    img3: string;
    header3: string;
    statement3: string;

    constructor() {
        this.img = "assets/Coffee.jpg";
        this.header = "SIPPING IS BELIEVING";
        this.statement = "HANDCRAFTED EXPRESSO DRINKS >";

        this.img2 = "assets/All_Day_Sandwiches_768x768.png"
        this.header2 = "FRESHLY MADE"
        this.statement2 = "ALL-DAY BREAKFAST SANDWICHES >"

        this.img3 = "assets/Hot Coffee Mobile_640x640.jpg";
        this.header3 = "DUNKIN' CLASSIC";
        this.statement3 = "HOT COFFEE";
    }
}