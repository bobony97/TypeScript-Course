//TIPOS DE DATOS
let typeString: string = "Hello World";  //Cadenas
let typeNumber: number = 25;             //Numeros
let typeBoolean: boolean = true;         //Boleanos

typeString = "Hello world 2";
typeNumber = 35;
typeBoolean = false;

//ARRAY
let arrNumber: number[] = [1, 2, 3];
// let arrNumber: Array<number> = [1, 2, 3];

let arrString: string[] = ["uno", "dos", "tres"];

//Con "any" se puede tener cualquier tipo de dato
let arrAny : any[] = [1, "dos", true];

//TUPLE
//Es un tipo de dato que permite expresar un conjunto fijo de elementos, donde cada elemento puede ser de un tipo diferente
let tuple : [string, number, boolean];
tuple = ["hola", 10, true];

//TUPLE ARRAY
let players : [number, string][];
players = [
    [1, `pablo`],
    [2, `juan`],
    [3, `pedro`],
]


////////////////////////////////////////////////////////////////////////////


//TYPE AND TYPEOF
/*
La palabra reservada type en TypeScript se utiliza para definir un nuevo tipo, que puede ser una combinación de tipos existentes, una intersección de tipos, o un alias
para un tipo existente. Esto es útil para crear tipos personalizados que se pueden reutilizar en todo el código.
Por ejemplo:
type Coordenada = {
    x: number;
    y: number;
};

let punto: Coordenada = { x: 10, y: 20 };
Aquí, Coordenada se define como un nuevo tipo que describe un objeto con propiedades x e y de tipo number.


Por otro lado, typeof es un operador en JavaScript y TypeScript que se utiliza para obtener el tipo de una expresión en tiempo de compilación.
En TypeScript, typeof es una característica especial conocida como "Type Query". Se utiliza para obtener el tipo de una variable, propiedad o función en tiempo de compilación.
Por ejemplo:
let num: number = 42;
let tipoDeNum: typeof num; // tipoDeNum es 'number'

Aquí, typeof num devuelve el tipo de la variable num, que es number.

*/


////////////////////////////////////////////////////////////////////////////


//COMPOSICION DE TIPOS O UNION DE TIPOS
//Unión de tipos: Puedes combinar múltiples tipos utilizando el operador | para crear un nuevo tipo que pueda ser cualquiera de los tipos combinados.
let data : number | string;
data = 5;
data = "cinco";
//data = true; Error

////////////////////////////////////////////////////////////////////////////

// Función que muestra la longitud de una cadena o devuelve el valor numérico
function displayLengthOrValue(input: number | string): void {
    if (typeof input === "string") {
        console.log(`La longitud de la cadena es ${input.length}`);
    } else {
        console.log(`El valor numérico es ${input}`);
    }
}

displayLengthOrValue("Hola"); // Muestra: La longitud de la cadena es 4
displayLengthOrValue(42); // Muestra: El valor numérico es 42

////////////////////////////////////////////////////////////////////////////

// Definir una interfaz que tenga una propiedad que puede ser un número o una cadena
interface Item {
    id: number | string;
    name: string;
}

// Usar la interfaz para crear un objeto con una propiedad que puede ser un número o una cadena
let item: Item = { id: 1, name: "Producto A" }; // Válido
let item2: Item = { id: "ABC", name: "Producto B" }; // También válido

////////////////////////////////////////////////////////////////////////////

// Función de guardia de tipo para comprobar si el valor es un número
function isNumber(value: number | string): value is number {
    return typeof value === "number";
}

// Uso de la función de guardia de tipo
let value: number | string = 42;
if (isNumber(value)) {
    console.log("Es un número");
} else {
    console.log("Es una cadena");
}





