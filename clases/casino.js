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
    Casino.prototype.realizarApuesta = function (juegoNombre, cantidad, numeroElegido) {
        if (this.saldo < cantidad) {
            return "No tienes suficientes monedas para realizar esta apuesta.";
        }
        for (var _i = 0, _a = this.juegos; _i < _a.length; _i++) {
            var juego = _a[_i];
            if (juego.getNombre() === juegoNombre) {
                // Restar las monedas 
                this.saldo -= cantidad;
                return juego.realizarApuesta(cantidad, numeroElegido);
            }
        }
        return "Juego no encontrado."; // Este mensaje ocurrirá si no coincide el nombre.
    };
    Casino.prototype.mostrarSaldo = function () {
        console.log("Tu saldo actual es: ".concat(this.saldo, " monedas."));
    };
    Casino.prototype.mostrarMenu = function () {
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
        var opcion;
        while (true) {
            var input = readlineSync.question("Opción: ");
            opcion = parseInt(input);
            if (!isNaN(opcion) && opcion >= 1 && opcion <= 3) {
                break;
            }
            else {
                console.log("Opción no válida. Por favor ingresa un número entre 1 y 3.");
            }
        }
        return opcion;
    };
    return Casino;
}());
exports.Casino = Casino;
