"use strict";
class DataCollection {
    constructor() {
        this.items = [];
        // getNames() : string[] {
        //     return this.items.map((item) => item.name);
        // }
        // getItemById(id: number) : Person | undefined{
        //     return this.items.find((item : Person) => item.id === id)
        // }
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    ;
    getItems() {
        console.log(`List of items: ${JSON.stringify(this.items)}`);
    }
}
const productCollection = new DataCollection();
const newData = {
    id: 1,
    name: "beer",
    price: 333
};
productCollection.addItem(newData);
productCollection.getItems();
