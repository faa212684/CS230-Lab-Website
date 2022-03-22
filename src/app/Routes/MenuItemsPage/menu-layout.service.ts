import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { MenuLayoutModel } from "./menu-layout.model";

@Injectable({
    providedIn: 'root'
})
export class MenuLayoutService {
    // private baseUrl: string = "https://dunkin-donuts-735b8-default-rtdb.firebaseio.com/"
    // private menuLayoutEndpoint: string = "menu-layout.json"

    constructor(private http: AngularFireDatabase) {

    }

    public getMenuLayout() {
        return this.http.list<MenuLayoutModel[]>("menu-layout").valueChanges();
    }
}