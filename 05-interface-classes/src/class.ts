// CLASSES
// -Existen en tiempo de compilacion y durante el tiempo de ejecucion 
// -Podemos inicializar propiedades e implementar metodos 
// -Crear instancias de dicha clase

class Person {
    constructor() {}

    greet():void {
        console.log("Hello");
    }
}

class Employee extends Person{

    constructor(private readonly  id : number, private name: string, private department: string) { //readonly: Indica que dicha propiedad no puede ser modificada solo leida
        super();
        //Automatic Properties:Al colocar el modificador de acceso 'private' en las propiedades de la clase, no es necesario declarar dichas propiedades explícitamente en la clase. 
        //TypeScript automáticamente considera estas propiedades como parte de la clase y las maneja internamente, lo que permite escribir código más conciso y legible. 
        this.showInfo();
    }

    private showInfo() {
        console.log(`Name: ${this.name} - Department: ${this.department}`)
    }
}

const emp = new Employee(1, "carlos", "System");
console.log(emp)
emp.greet()


