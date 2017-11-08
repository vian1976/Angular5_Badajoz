export interface Printer {
    id: string | number;
    modelo: string;
    tipo: string;

}

export class PrintersModel implements Printer {

    // En typscript podemos declarar las variables en el constructor y el internamente lo inicializa y lo hace automáticamente
    constructor(
        public id: string | number,
        public modelo: string,
        public tipo: string
    ) { }


}
