import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { MenuLayoutModel } from "./menu-layout.model";

@Injectable({
    providedIn: 'root'
})
export class MenuLayoutService {
    private baseUrl: string = "https://dunkin-donuts-735b8-default-rtdb.firebaseio.com/"
    private menuLayoutEndpoint: string = "menu-layout.json"

    constructor(private http:HttpClient) {

    }

    public getMenuLayout(){
        return this.http.get<MenuLayoutModel[]>(this.baseUrl + this.menuLayoutEndpoint);
    }
}