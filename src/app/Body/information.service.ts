import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core";
import { InformationListModel } from "./information-list.model";

@Injectable({
    providedIn: 'root'
})
export class InformationService {
    private baseUrl: string = "https://dunkin-donuts-735b8-default-rtdb.firebaseio.com/"
    private informationEndpoint: string = "information.json"

    constructor(private http:HttpClient) {

    }

    public getInformation(){
        return this.http.get<InformationListModel[]>(this.baseUrl + this.informationEndpoint);
    }
}