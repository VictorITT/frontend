export class Product {
    id?: number;
    name: string;
    price: number;
    image: string;

    constructor(name: string, price: number, image: string) {
        this.name = name;
        this.price = price;
        this.image = image;
    }
}