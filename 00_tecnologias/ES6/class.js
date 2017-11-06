class Libro{
    constructor (autor,titulo){
        this.autor=autor;
        this.titulo=titulo;

    }

    mostrarAutor(){
        console.log(this.autor);
    }
}

class LibroTecnico extends Libro{
    constructor (autor, titulo, tema){
        super(autor, titulo);
        this.tema = tema;
    }

    mostrar (){
        console.log(this);
    }
}

let obLibro = new  LibroTecnico ("Angel","Angular 2","Programación");
obLibro.editorial = "Anaya";
obLibro.mostrar();