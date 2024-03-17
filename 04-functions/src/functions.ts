//Funciones sin retorno
function getName(name: string):void {
    console.log(`My name is: ${name}`);
}

//Funciones con retorno
function getName1(name: string):string {
    return `My name is: ${name}`;
}

//El operador "?"" se utiliza para marcar un miembro de un tipo como opcional.
//Tambien se puede utilizar el operador "|" para la "union de tipos" y decir que el tipo de dato de "long" puede ser tanto un numer como un string
function printPosition(position : {lat: number, long?: number | string}):void {
    console.log(`Latitude: ${position.lat}, Longitude ${position.long}`);
}

//Tambien podemos inicializar el parametro en la funcion y va a tener ese valor por defecto
function getAge(age : number = 25):void {
    console.log(`I´m ${age} years old`);
}

getAge();
