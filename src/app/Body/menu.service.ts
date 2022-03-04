import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { MenuItemModel } from "./menu-item.model";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private baseUrl: string = "https://dunkin-donuts-735b8-default-rtdb.firebaseio.com/"
    private menusEndpoint: string = "Menu.json"

    constructor(private http:HttpClient) {

    }

    public getMenu(){
        return this.http.get<MenuItemModel[]>(this.baseUrl + this.menusEndpoint);
    }
}