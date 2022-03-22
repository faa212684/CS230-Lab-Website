import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { MenuItemModel } from "./menu-item.model";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    // private baseUrl: string = "https://dunkin-donuts-735b8-default-rtdb.firebaseio.com/"
    // private menusEndpoint: string = "Menu.json"

    constructor(private db: AngularFireDatabase) {

    }

    public getMenu() {
        return this.db.list<MenuItemModel>("Menu").valueChanges();
    }

    addMenu(menu: MenuItemModel) {
        this.db.list<MenuItemModel>("Menu").push(menu);
    }
}