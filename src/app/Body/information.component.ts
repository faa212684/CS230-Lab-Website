import { Component, Input } from "@angular/core";

@Component({
    selector: 'DD-information',
    templateUrl: 'information.component.html',
    styleUrls: ['information.component.css']
})
export class InformationComponent{
    @Input() img: string;
    @Input() header: string;
    @Input() find: string;
    @Input() nearest: string;
    @Input() address: string;
    @Input() state: string;
    @Input() hours: string;
    @Input() phone: string;

    constructor() {
        this.img = "";
        this.header = "";
        this.find = "";
        this.nearest = "";
        this.address = "";
        this.state = "";
        this.hours = "";
        this.phone = "";
    }
}