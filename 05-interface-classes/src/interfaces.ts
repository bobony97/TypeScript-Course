//INTERFACE
// -Solo existen en tiempo de compilacion, cuando es transpilado a js las interface no existen
// -Solo se usan para verificar tipos

//Interface de un libro
// interface Book {
//     id: number;
//     title: string;
//     author: string;
//     coAuthor?: string;  //La propiedad "coAuthor" va a ser opcional gracias a "?"
//     isLoad?: (id : number) => void;
// }

// //Creacion de un libro basado en la interface
// const book : Book = {
//     id: 1,
//     title: "My Title",
//     author: "Author"
// };

// //Array de interface Book, hay que indicar a la interface que va a ser un array
// const books : Book[] = []

// //Funcion que retorna un Book
// function getBook() : Book {
//     return {id: 1, title: "My title", author: "Bazael"};
// }

// const myBook = getBook();

// //Funcion que recibe un Book
// function createBook(book : Book) : Book {
//     return book;
// }

// const newBook : Book = {
//     id: 1,
//     title: "My title",
//     author: "Bazael",
//     coAuthor: "Dominicode"
// };
// createBook(newBook);




/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// interface Person {
//     id : number;
//     name : string;
// }

// interface Employee extends Person{
//     dept : string;
// }

// interface Customer extends Person{
//     country : string;
// }

// const emp : Employee = {
//     id: 1,
//     name: "Pedro",
//     dept: "System"
// };

