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
exports.TragamonedasX10 = exports.TragamonedasX5 = exports.Tragamonedas = void 0;
var JuegoBase_1 = require("../clases/JuegoBase");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombre, apuestaMinima, multiplicador, numColumnas) {
        var _this = _super.call(this, nombre, apuestaMinima) || this;
        _this.frutas = ['🍒', '🍊', '🍋', '🍉'];
        _this.multiplicador = multiplicador;
        _this.numColumnas = numColumnas;
        return _this;
    }
    Tragamonedas.prototype.girarColumnas = function () {
        var resultado = [];
        for (var i = 0; i < this.numColumnas; i++) {
            resultado.push(this.frutas[Math.floor(Math.random() * this.frutas.length)]);
        }
        return resultado;
    };
    Tragamonedas.prototype.realizarApuesta = function (cantidad, numeroElegido) {
        if (cantidad < this.apuestaMinima) {
            return "La apuesta m\u00EDnima es de ".concat(this.apuestaMinima, " monedas.");
        }
        var resultadoColumnas = this.girarColumnas();
        console.log("Resultado de las columnas: ".concat(resultadoColumnas.join(" - ")));
        if (resultadoColumnas.every(function (fruta) { return fruta === resultadoColumnas[0]; })) {
            var premio = cantidad * this.multiplicador;
            return "\u00A1Has ganado ".concat(premio, " monedas!");
        }
        else {
            return "Has perdido. \u00A1Mejor suerte la pr\u00F3xima vez!";
        }
    };
    return Tragamonedas;
}(JuegoBase_1.JuegoBase));
exports.Tragamonedas = Tragamonedas;
var TragamonedasX5 = /** @class */ (function (_super) {
    __extends(TragamonedasX5, _super);
    function TragamonedasX5() {
        return _super.call(this, "Tragamonedas X5", 50, 5, 3) || this;
    }
    return TragamonedasX5;
}(Tragamonedas));
exports.TragamonedasX5 = TragamonedasX5;
var TragamonedasX10 = /** @class */ (function (_super) {
    __extends(TragamonedasX10, _super);
    function TragamonedasX10() {
        return _super.call(this, "Tragamonedas X10", 100, 10, 4) || this;
    }
    return TragamonedasX10;
}(Tragamonedas));
exports.TragamonedasX10 = TragamonedasX10;
