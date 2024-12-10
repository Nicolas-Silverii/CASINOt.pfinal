"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var readlineSync = require("readline-sync");
var Casino = /** @class */ (function () {
    function Casino() {
        this.juegos = [];
        this.saldo = 1000;
    }
    Casino.prototype.agregarJuego = function (juego) {
        this.juegos.push(juego);
    };
    Casino.prototype.mostrarMenu = function () {
        console.log("\nBienvenido al Casino!");
        console.log("1. Jugar Tragamonedas");
        console.log("2. Jugar Ruleta");
        console.log("3. Salir");
        var opcion = readlineSync.questionInt("Elige una opción: ");
        return opcion;
    };
    Casino.prototype.mostrarSubMenuTragamonedas = function () {
        console.log("\nElige el tipo de tragamonedas:");
        console.log("1. Tragamonedas X5");
        console.log("2. Tragamonedas X10");
        var subOpcion = readlineSync.questionInt("Elige una opción: ");
        return subOpcion;
    };
    Casino.prototype.realizarApuesta = function (juegoNombre, cantidad, numeroElegido) {
        var juego = this.juegos.find(function (j) { return j.getNombre() === juegoNombre; });
        if (!juego)
            return "Juego no encontrado.";
        if (cantidad < juego.getApuestaMinima())
            return "La apuesta m\u00EDnima es ".concat(juego.getApuestaMinima(), ".");
        this.saldo -= cantidad;
        var resultado = juego.realizarApuesta(cantidad, numeroElegido);
        if (resultado.includes("¡Felicidades! Has ganado")) {
            var match = resultado.match(/(\d+) monedas/);
            if (match) {
                var premio = parseInt(match[1], 10);
                this.saldo += premio;
            }
        }
        return resultado;
    };
    Casino.prototype.mostrarSaldo = function () {
        console.log("Saldo actual: ".concat(this.saldo, " monedas."));
    };
    Casino.prototype.jugar = function () {
        var salir = false;
        while (!salir) {
            var opcion = this.mostrarMenu();
            switch (opcion) {
                case 1:
                    var tipoTragamonedas = this.mostrarSubMenuTragamonedas();
                    var cantidadApuesta = readlineSync.questionInt("¿Cuánto deseas apostar? ");
                    var juegoSeleccionado = "";
                    if (tipoTragamonedas === 1) {
                        juegoSeleccionado = "Tragamonedas X5";
                    }
                    else if (tipoTragamonedas === 2) {
                        juegoSeleccionado = "Tragamonedas X10";
                    }
                    var resultadoTragamonedas = this.realizarApuesta(juegoSeleccionado, cantidadApuesta);
                    console.log(resultadoTragamonedas);
                    break;
                case 2:
                    console.log("Juego de Ruleta.");
                    var numeroElegido = readlineSync.questionInt("Elige un número entre 0 y 5 para apostar: ");
                    var cantidadRuleta = void 0;
                    while (true) {
                        cantidadRuleta = readlineSync.questionInt("¿Cuánto deseas apostar? ");
                        if (cantidadRuleta >= 10) {
                            break;
                        }
                        else {
                            console.log("La apuesta mínima es de 10 monedas.");
                        }
                    }
                    var resultadoRuleta = this.realizarApuesta("Ruleta", cantidadRuleta, numeroElegido);
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
    };
    return Casino;
}());
exports.Casino = Casino;
