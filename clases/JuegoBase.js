"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JuegoBase = void 0;
var JuegoBase = /** @class */ (function () {
    function JuegoBase(nombre, apuestaMinima) {
        this.nombre = nombre;
        this.apuestaMinima = apuestaMinima;
    }
    JuegoBase.prototype.getNombre = function () {
        return this.nombre;
    };
    JuegoBase.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    return JuegoBase;
}());
exports.JuegoBase = JuegoBase;
