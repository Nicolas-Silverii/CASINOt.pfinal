import { JuegoBase } from './JuegoBase';

export class Ruleta extends JuegoBase {
    protected nombre: string = "Ruleta";
    public apuestaMinima: number = 10;

    constructor() {
        super("Ruleta", 10);
    }

    getNombre(): string {
        return this.nombre;
    }

    getApuestaMinima(): number {
        return this.apuestaMinima;
    }

    realizarApuesta(cantidad: number, numeroElegido?: number): string {
        const numeroGanador = Math.floor(Math.random() * 6)

        if (numeroElegido === numeroGanador) {
            const premio = cantidad * 10; 
            return `Número ganador: ${numeroGanador}\n¡Felicidades! Has ganado ${premio} monedas.`;
        } else {
            return `Número ganador: ${numeroGanador}\nLo siento, no has ganado esta vez.`;
        }
    }
}
