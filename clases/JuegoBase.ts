import { Juego } from '../clases/Juego';

export abstract class JuegoBase implements Juego { // Implementa interfaz Juego
    protected nombre: string;
    protected apuestaMinima: number;

    constructor(nombre: string, apuestaMinima: number) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;
    }

    getNombre(): string {
        return this.nombre;
    }

    abstract realizarApuesta(cantidad: number, numeroElegido?: number): string;

    getApuestaMinima(): number {
        return this.apuestaMinima;
    }
}
