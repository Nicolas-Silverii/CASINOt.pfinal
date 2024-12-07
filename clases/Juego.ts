export class Juego {
    protected nombre: string;
    protected apuestaMinima: number;

    constructor(nombre: string, apuestaMinima: number) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;
    }

    mostrarNombre(): string {
        return this.nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    realizarApuesta(cantidad: number, numeroElegido?: number): string {
        return `Apuesta realizada en ${this.nombre} con ${cantidad} monedas.`;
    }
}
