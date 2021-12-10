import { Product } from "./product";

export class Order {
    id?: number;
    date:Date;
    status: string;
    products: Product[]
    user: string

    constructor(date:Date,status: string,products: Product[],user: string){
        this.status = status;
        this.date = date;
        this.products = products;
        this.user = user;
    }

}