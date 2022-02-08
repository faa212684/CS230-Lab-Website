export class InformationListModel {
    img: string;
    header: string;
    find: string;
    nearest: string;
    address: string;
    state: string;
    hours: string;
    phone: string;

    constructor(img: string, header: string, find: string, nearest: string, address: string, state: string, hours: string, phone: string) {
        this.img = img;
        this.header = header;
        this.find = find;
        this.nearest = nearest;
        this.address = address;
        this.state = state;
        this.hours = hours;
        this.phone = phone;        
    }
}