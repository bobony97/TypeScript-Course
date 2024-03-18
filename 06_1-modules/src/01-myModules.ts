//Los modulos permiten divir y organizar de manera simple el codigo, basicamente un fichero que contenga un import/export o ambos, es un modulo, los modulos se ejecutan dentro de su propio
//ambito y no en el ambito global, esto quiere decir que variables, funciones, clases etc declaradas en un modulo, no seran visibles a menos que se exporten explicitamente 

//Variable / Constante
export const PI = 3.14;

//Interface
export interface Person {
    id: number;
    name: string;
}

//Funcion

export function generateRandomNumber() : number {
    return Math.floor(Math.random() * 100);
}

//OTRA FORMA DE EXPORTAR
// export { PI, Person, generateRandomNumber };