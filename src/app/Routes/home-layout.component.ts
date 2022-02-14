import { Component } from "@angular/core";
import { InformationListModel } from "../Body/information-list.model";
import { mock_information_list } from "../Body/mock_information_list";

@Component({
    selector: 'DD-home-layout',
    templateUrl: 'home-layout.component.html'
})

export class HomeLayoutComponent {
    informations: InformationListModel[] = [];

    constructor() {
        for(var information of mock_information_list){
            console.log(information)
            this.informations.push(information);
          }
    }
}