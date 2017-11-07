//Ejemplo de clase de typeScript
//Podemos declarar interfaces
interface Autor{
    autor: string;
    pais: string;
    nacimiento: Date;
}

interface Editorial {
    nombre: string;
    lugar: string;
}

class Libro implements Autor{
    //Tipos de javascript: string - number - array - object - Date - ...
    public autor:string;
    public pais;
    public nacimiento;
    private titulo:string;
    public editorial:Editorial;

    constructor (autor,titulo){
        this.autor=autor;
        this.titulo=titulo;

        this.editorial={nombre:"",lugar:""};

        

    }

    mostrarAutor(){
        console.log(this.autor);
    }
}

class LibroTecnico extends Libro{
    
    public tema:string;

    constructor (autor, titulo, tema){
        super(autor, titulo);
        this.tema = tema;
    }

    mostrar (){
        console.log(this);
    }
}

let obLibro = new  LibroTecnico ("Angel","Angular 2","Programación");



//Ahora no se puede usar método
//obLibro.editorial = "Anaya";
obLibro.mostrar();