"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Juego = void 0;
var Juego = /** @class */ (function () {
    function Juego(nombre, apuestaMinima) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;
    }
    Juego.prototype.mostrarNombre = function () {
        return this.nombre;
    };
    Juego.prototype.getNombre = function () {
        return this.nombre;
    };
    Juego.prototype.realizarApuesta = function (cantidad, numeroElegido) {
        return "Apuesta realizada en ".concat(this.nombre, " con ").concat(cantidad, " monedas.");
    };
    return Juego;
}());
exports.Juego = Juego;
