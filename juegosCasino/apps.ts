import * as readlineSync from 'readline-sync';
import { Casino } from '../clases/Casino';
import { TragamonedasX5 } from '../clases/Tragamonedas';  
import { TragamonedasX10 } from '../clases/Tragamonedas'; 
import { Ruleta } from '../clases/Ruleta';

function ejecutarJuego() {
    const casino = new Casino();
    
    // Variantes Tragamonedas
    const tragamonedasX5 = new TragamonedasX5(); 
    const tragamonedasX10 = new TragamonedasX10();
    const ruleta = new Ruleta("Ruleta Argentina", 20);

    casino.agregarJuego(tragamonedasX5);
    casino.agregarJuego(tragamonedasX10);
    casino.agregarJuego(ruleta);

    let jugando = true;

    while (jugando) {
        casino.mostrarSaldo();
        const opcion = casino.mostrarMenu();

        switch (opcion) {
            case 1: {
                // Elegir tipo de Tragamonedas
                console.log("Has elegido Tragamonedas.");
                console.log("1. Tragamonedas X5");
                console.log("2. Tragamonedas X10");

                let variante: number;
                while (true) {
                    const input = readlineSync.question("Selecciona la variante (1 o 2): ");
                    variante = parseInt(input);
                    if (variante === 1 || variante === 2) {
                        break;
                    } else {
                        console.log("Por favor, selecciona 1 para Tragamonedas X5 o 2 para Tragamonedas X10.");
                    }
                }

                // Apuesta mínima 
                if (variante === 1) {
                    console.log("La apuesta mínima para Tragamonedas X5 es de 50 monedas.");
                } else if (variante === 2) {
                    console.log("La apuesta mínima para Tragamonedas X10 es de 100 monedas.");
                }

                let cantidad: number;
                while (true) {
                    const input = readlineSync.question("Ingresa la cantidad que deseas apostar: ");
                    cantidad = parseInt(input);
                    if (!isNaN(cantidad) && cantidad > 0) {
                        break;
                    } else {
                        console.log("Por favor, ingresa un número válido mayor que 0.");
                    }
                }

                // Verificar la apuesta mínima
                if (variante === 1 && cantidad < 50) {
                    console.log("La apuesta mínima para Tragamonedas X5 es de 50 monedas.");
                    break;
                } else if (variante === 2 && cantidad < 100) {
                    console.log("La apuesta mínima para Tragamonedas X10 es de 100 monedas.");
                    break;
                }

                // Hacer apuesta
                if (variante === 1) {
                    console.log(casino.realizarApuesta("Tragamonedas X5", cantidad));  
                } else {
                    console.log(casino.realizarApuesta("Tragamonedas X10", cantidad)); 
                }

                break;
            }
            case 2: {

                // Juego de ruleta
                console.log("Has elegido Ruleta.");

                let numeroElegido: number;
                while (true) {
                    const input = readlineSync.question("Ingresa un número entre 0 y 5 para apostar: ");
                    numeroElegido = parseInt(input);
                    if (!isNaN(numeroElegido) && numeroElegido >= 0 && numeroElegido <= 5) {
                        break;
                    } else {
                        console.log("Por favor, ingresa un número entre 0 y 5.");
                    }
                }

                let cantidad: number;
                while (true) {
                    const input = readlineSync.question("Ingresa la cantidad que deseas apostar: ");
                    cantidad = parseInt(input);
                    if (!isNaN(cantidad) && cantidad > 0) {
                        break;
                    } else {
                        console.log("Por favor, ingresa un número válido mayor que 0.");
                    }
                }

                console.log(casino.realizarApuesta("Ruleta Argentina", cantidad, numeroElegido));
                break;
            }
            case 3:

                // Salir del juego

                jugando = false;
                console.log("Gracias por jugar. ¡Adios, vuelva prontos!");
                break;
        }
    }
}

ejecutarJuego();
