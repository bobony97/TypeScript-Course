interface Person {
    id: number;
    name: string;
}

interface Employee extends Person{
    role: String;
}

interface Product {
    id: number;
    name: string;
}

interface Data<T> {
    addItem(newItem: T) : void;
}


class DataCollection<T extends { id: number, name: string}> implements Data<T>{  //Lo que estamos diciendo con <T> es decir que al crear una instancia de la clase, luego le vamos a decir de que tipo va a ser dicha  clase
    private items : T[] = [];

    addItem(newItem : T): void {
        this.items.push(newItem);
    };

    getItems(): void {
        console.log(`List of items: ${JSON.stringify(this.items)}`)
    }

    getNames() : string[] {
        return this.items.map((item) => item.name);
    }

    getItemById(id: number) : Person | undefined{
        return this.items.find((item : Person) => item.id === id)
    }
}

const productCollection = new DataCollection<Product>();
const newData = {
    id: 1,
    name: "beer",
    price: 333
}


productCollection.addItem(newData);
productCollection.getItems();

const personCollection = new DataCollection<Employee>();
