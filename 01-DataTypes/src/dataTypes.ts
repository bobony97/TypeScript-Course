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

//COMPOSICION DE TIPOS
//Unión de tipos: Puedes combinar múltiples tipos utilizando el operador | para crear un nuevo tipo que pueda ser cualquiera de los tipos combinados.
let data : number | string;
data = 5;
data = "cinco";
//data = true; Error


