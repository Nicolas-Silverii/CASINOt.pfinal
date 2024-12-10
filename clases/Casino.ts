import { JuegoBase } from './JuegoBase';
import * as readlineSync from 'readline-sync';

export class Casino {
    private juegos: JuegoBase[] = [];
    private saldo: number = 1000;

    agregarJuego(juego: JuegoBase) {
        this.juegos.push(juego);
    }

    mostrarMenu(): number {
        console.log("\nBienvenido al Casino!");
        console.log("1. Jugar Tragamonedas");
        console.log("2. Jugar Ruleta");
        console.log("3. Salir");
        const opcion = readlineSync.questionInt("Elige una opción: ");
        return opcion;
    }

    mostrarSubMenuTragamonedas(): number {
        console.log("\nElige el tipo de tragamonedas:");
        console.log("1. Tragamonedas X5");
        console.log("2. Tragamonedas X10");
        const subOpcion = readlineSync.questionInt("Elige una opción: ");
        return subOpcion;
    }

    realizarApuesta(juegoNombre: string, cantidad: number, numeroElegido?: number): string {
        const juego = this.juegos.find(j => j.getNombre() === juegoNombre);
        
        if (!juego) return "Juego no encontrado.";
        if (cantidad < juego.getApuestaMinima()) return `La apuesta mínima es ${juego.getApuestaMinima()}.`;
    
        this.saldo -= cantidad; 
        let resultado: string = juego.realizarApuesta(cantidad, numeroElegido);  
        
        if (resultado.includes("¡Felicidades! Has ganado")) {
            const match = resultado.match(/(\d+) monedas/);
            if (match) {
                const premio = parseInt(match[1], 10);
                this.saldo += premio; 
            }
        }
    
        return resultado;
    }

    mostrarSaldo(): void {
        console.log(`Saldo actual: ${this.saldo} monedas.`);
    }

    jugar() {
        let salir = false;

        while (!salir) {
            const opcion = this.mostrarMenu();  

            switch (opcion) {
                case 1:
                    const tipoTragamonedas = this.mostrarSubMenuTragamonedas(); 
                    const cantidadApuesta = readlineSync.questionInt("¿Cuánto deseas apostar? ");
                    let juegoSeleccionado = "";
                    if (tipoTragamonedas === 1) {
                        juegoSeleccionado = "Tragamonedas X5";
                    } else if (tipoTragamonedas === 2) {
                        juegoSeleccionado = "Tragamonedas X10";
                    }
                    const resultadoTragamonedas = this.realizarApuesta(juegoSeleccionado, cantidadApuesta);
                    console.log(resultadoTragamonedas);
                    break;

                case 2:
                    console.log("Juego de Ruleta.");
                    const numeroElegido = readlineSync.questionInt("Elige un número entre 0 y 5 para apostar: ");
                    let cantidadRuleta: number;

                    while (true) {
                        cantidadRuleta = readlineSync.questionInt("¿Cuánto deseas apostar? ");
                        
                        if (cantidadRuleta >= 10) {
                            break;  
                        } else {
                            console.log("La apuesta mínima es de 10 monedas.");
                        }
                    }

                    const resultadoRuleta = this.realizarApuesta("Ruleta", cantidadRuleta, numeroElegido);
                    console.log(resultadoRuleta); 
                    break;

                case 3:
                    console.log("¡Gracias! Vuelva pronto.");
                    salir = true;  
                    process.exit(0); 
                    break;

                default:
                    console.log("Opción no válida. Por favor, selecciona una opción válida.");
                    break;
            }

            this.mostrarSaldo();
        }
    }
}
