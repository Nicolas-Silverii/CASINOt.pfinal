import * as readlineSync from 'readline-sync';
import { Juego } from './Juego';

export class Casino {
    private juegos: Juego[];
    private saldo: number;

    constructor() {
        this.juegos = [];
        this.saldo = 1000; 
    }

    agregarJuego(juego: Juego) {
        this.juegos.push(juego);
    }

    realizarApuesta(juegoNombre: string, cantidad: number, numeroElegido?: number): string {
        if (this.saldo < cantidad) {
            return "No tienes suficientes monedas para realizar esta apuesta.";
        }

        for (const juego of this.juegos) {
            if (juego.getNombre() === juegoNombre) {
                // Restar las monedas 
                this.saldo -= cantidad;
                return juego.realizarApuesta(cantidad, numeroElegido);
            }
        }

        return "Juego no encontrado."; // Este mensaje ocurrirá si no coincide el nombre.
    }

    mostrarSaldo(): void {
        console.log(`Tu saldo actual es: ${this.saldo} monedas.`);
    }

    mostrarMenu(): number {
        console.log("*****************************************");
        console.log("********* BIENVENIDO AL CASINO **********");
        console.log("*****************************************");
        console.log("\n");

        console.log("🎰 ** JUEGOS DISPONIBLES ** 🎰");
        console.log("\n");

        console.log("1. Jugar Tragamonedas 🎰");
        console.log("2. Jugar Ruleta 🎲");
        console.log("3. Salir 🚪");

        console.log("\n*****************************************");

        let opcion: number;
        while (true) {
            const input = readlineSync.question("Opción: ");
            opcion = parseInt(input);

            if (!isNaN(opcion) && opcion >= 1 && opcion <= 3) {
                break;
            } else {
                console.log("Opción no válida. Por favor ingresa un número entre 1 y 3.");
            }
        }
        return opcion;
    }
}
