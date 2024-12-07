"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Casino_1 = require("../clases/Casino");
var Tragamonedas_1 = require("../clases/Tragamonedas");
var Tragamonedas_2 = require("../clases/Tragamonedas");
var Ruleta_1 = require("../clases/Ruleta");
function ejecutarJuego() {
    var casino = new Casino_1.Casino();
    // Variantes Tragamonedas
    var tragamonedasX5 = new Tragamonedas_1.TragamonedasX5();
    var tragamonedasX10 = new Tragamonedas_2.TragamonedasX10();
    var ruleta = new Ruleta_1.Ruleta("Ruleta Argentina", 20);
    // Variantes casino
    casino.agregarJuego(tragamonedasX5);
    casino.agregarJuego(tragamonedasX10);
    casino.agregarJuego(ruleta);
    var jugando = true;
    while (jugando) {
        casino.mostrarSaldo();
        var opcion = casino.mostrarMenu();
        switch (opcion) {
            case 1: {
                // Selección de variante Tragamonedas
                console.log("Has elegido Tragamonedas.");
                console.log("1. Tragamonedas X5");
                console.log("2. Tragamonedas X10");
                var variante = void 0;
                while (true) {
                    var input = readlineSync.question("Selecciona la variante (1 o 2): ");
                    variante = parseInt(input);
                    if (variante === 1 || variante === 2) {
                        break;
                    }
                    else {
                        console.log("Por favor, selecciona 1 para Tragamonedas X5 o 2 para Tragamonedas X10.");
                    }
                }
                // Apuesta mínima 
                if (variante === 1) {
                    console.log("La apuesta mínima para Tragamonedas X5 es de 50 monedas.");
                }
                else if (variante === 2) {
                    console.log("La apuesta mínima para Tragamonedas X10 es de 100 monedas.");
                }
                var cantidad = void 0;
                while (true) {
                    var input = readlineSync.question("Ingresa la cantidad que deseas apostar: ");
                    cantidad = parseInt(input);
                    if (!isNaN(cantidad) && cantidad > 0) {
                        break;
                    }
                    else {
                        console.log("Por favor, ingresa un número válido mayor que 0.");
                    }
                }
                // Verificar la apuesta mínima
                if (variante === 1 && cantidad < 50) {
                    console.log("La apuesta mínima para Tragamonedas X5 es de 50 monedas.");
                    break;
                }
                else if (variante === 2 && cantidad < 100) {
                    console.log("La apuesta mínima para Tragamonedas X10 es de 100 monedas.");
                    break;
                }
                // Realizar apuesta
                if (variante === 1) {
                    console.log(casino.realizarApuesta("Tragamonedas X5", cantidad));
                }
                else {
                    console.log(casino.realizarApuesta("Tragamonedas X10", cantidad));
                }
                break;
            }
            case 2: {
                // Juego de ruleta
                console.log("Has elegido Ruleta.");
                var numeroElegido = void 0;
                while (true) {
                    var input = readlineSync.question("Ingresa un número entre 0 y 5 para apostar: ");
                    numeroElegido = parseInt(input);
                    if (!isNaN(numeroElegido) && numeroElegido >= 0 && numeroElegido <= 5) {
                        break;
                    }
                    else {
                        console.log("Por favor, ingresa un número entre 0 y 5.");
                    }
                }
                var cantidad = void 0;
                while (true) {
                    var input = readlineSync.question("Ingresa la cantidad que deseas apostar: ");
                    cantidad = parseInt(input);
                    if (!isNaN(cantidad) && cantidad > 0) {
                        break;
                    }
                    else {
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
