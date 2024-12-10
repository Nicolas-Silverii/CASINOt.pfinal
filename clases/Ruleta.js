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
var JuegoBase_1 = require("./JuegoBase");
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this, "Ruleta", 10) || this;
        _this.nombre = "Ruleta";
        _this.apuestaMinima = 10;
        return _this;
    }
    Ruleta.prototype.getNombre = function () {
        return this.nombre;
    };
    Ruleta.prototype.getApuestaMinima = function () {
        return this.apuestaMinima;
    };
    Ruleta.prototype.realizarApuesta = function (cantidad, numeroElegido) {
        var numeroGanador = Math.floor(Math.random() * 6);
        if (numeroElegido === numeroGanador) {
            var premio = cantidad * 10;
            return "N\u00FAmero ganador: ".concat(numeroGanador, "\n\u00A1Felicidades! Has ganado ").concat(premio, " monedas.");
        }
        else {
            return "N\u00FAmero ganador: ".concat(numeroGanador, "\nLo siento, no has ganado esta vez.");
        }
    };
    return Ruleta;
}(JuegoBase_1.JuegoBase));
exports.Ruleta = Ruleta;
