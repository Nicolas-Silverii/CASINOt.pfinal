import { Juego } from './Juego';

export class Ruleta extends Juego {
    constructor(nombre: string, apuestaMinima: number = 20) {
        super(nombre, apuestaMinima);
    }

    realizarApuesta(cantidad: number, numeroElegido: number): string {
        if (cantidad < this.apuestaMinima) {
            return `La apuesta debe ser mayor o igual a ${this.apuestaMinima}.`;
        }

        // Giro de la ruleta
        const numeroGanador = this.girarRuleta();

        // ¿Ganó o perdió?
        if (numeroElegido === numeroGanador) {
            return `¡Has ganado! El número ganador es ${numeroGanador}.`;
        } else {
            return `Has perdido. El número ganador fue ${numeroGanador}. Inténtalo de nuevo.`;
        }
    }

    // Método para girar la ruleta
    private girarRuleta(): number {
        return Math.floor(Math.random() * 11);
    }
}
 