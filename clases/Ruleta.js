"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
var Juego_1 = require("./Juego");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta(nombre, apuestaMinima) {
        if (apuestaMinima === void 0) { apuestaMinima = 20; }
        return _super.call(this, nombre, apuestaMinima) || this;
    }
    Ruleta.prototype.realizarApuesta = function (cantidad, numeroElegido) {
        if (cantidad < this.apuestaMinima) {
            return "La apuesta debe ser mayor o igual a ".concat(this.apuestaMinima, ".");
        }
        // Realizamos el giro de la ruleta
        var numeroGanador = this.girarRuleta();
        // ¿Ganó o perdió?
        if (numeroElegido === numeroGanador) {
            return "\u00A1Has ganado! El n\u00FAmero ganador es ".concat(numeroGanador, ".");
        }
        else {
            return "Has perdido. El n\u00FAmero ganador fue ".concat(numeroGanador, ". Int\u00E9ntalo de nuevo.");
        }
    };
    // Método para girar la ruleta, devuelve un número aleatorio entre 0 y 5
    Ruleta.prototype.girarRuleta = function () {
        return Math.floor(Math.random() * 11);
    };
    return Ruleta;
}(Juego_1.Juego));
exports.Ruleta = Ruleta;
