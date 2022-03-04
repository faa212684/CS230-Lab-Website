import { Component, OnInit } from "@angular/core";
import { InformationListModel } from "../Body/information-list.model";
import { InformationService } from "../Body/information.service";
import { mock_information_list } from "../Body/mock_information_list";

@Component({
    selector: 'DD-home-layout',
    templateUrl: 'home-layout.component.html'
})

export class HomeLayoutComponent implements OnInit{
    informations: InformationListModel[] = [];

    constructor(private informationService:InformationService) {
        // for(var information of mock_information_list){
        //     console.log(information)
        //     this.informations.push(information);
        //   }
    }
    ngOnInit(): void {
        this.informationService.getInformation().subscribe(data => {
            console.log("Fetching information data");
            for (var information of data) {
                console.log(information);
                this.informations.push(information);
            }
        })
    }
}