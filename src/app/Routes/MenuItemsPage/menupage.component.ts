import { Component, Input } from "@angular/core";
import { MenuLayoutModel } from "./menu-layout.model";

@Component({
    selector: 'DD-menupage',
    templateUrl: 'menupage.component.html',
    styleUrls: ['menupage.component.css']
})

export class MenuPageComponent {
    @Input() img: string;
    @Input() header: string;
    @Input() button: string;

    menuLayouts: MenuLayoutModel[] = [];


    constructor() {
        this.img = "";
        this.header = "";
        this.button = "";
    }
}