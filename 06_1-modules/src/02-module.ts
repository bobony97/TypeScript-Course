// import { Person, generateRandomNumber } from "./01-myModules";
// import { PI as myPI } from "./01-myModules"; //Otra forma de importar cambiando el nombre del modulo importado
import * as myCode from "./01-myModules"; //Importamos todos los módulos

console.log(myCode.PI);

const user: myCode.Person = {
    id: 1,
    name: "Domini"
}

console.log (user);

console.log(myCode.generateRandomNumber());
