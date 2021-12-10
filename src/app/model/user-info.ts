export class UserInfo {
    id?:number;
    phone:number;
    addressLine:string;
    city:string;
    state:string;
    postalCode:number;
    country:string;

    constructor(phone:number, addressLine:string, city:string, state:string, postalCode:number, country:string) {
        this.phone = phone;
        this.addressLine = addressLine;
        this.city = city;
        this.state = state;
        this.postalCode = postalCode;
        this.country = country;
    }
}