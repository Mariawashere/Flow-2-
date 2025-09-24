export default class Data {
    // For at lave nyt Data-object med "new Data(...)"
    constructor(id, brand, model, size, price, color, description) {
        this.id = id;
        this.brand = brand;
        this.model = model;
        this.size = size;
        this.price = price;
        this.color = color;
        this.description = description;
    }
}
