import { Injectable } from "@angular/core";
import { InformationListModel } from "./information-list.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
    providedIn: 'root'
})
export class InformationService {
    // private baseUrl: string = "https://dunkin-donuts-735b8-default-rtdb.firebaseio.com/"
    // private informationEndpoint: string = "information.json"

    constructor(private db:AngularFireDatabase) {

    }

    public getInformation(){
        // return this.http.get<InformationListModel[]>(this.baseUrl + this.informationEndpoint);
        return this.db.list<InformationListModel>("information").valueChanges();
    }
}