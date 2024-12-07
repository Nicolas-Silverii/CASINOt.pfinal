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
var Juego_1 = require("./Juego");
var Tragamonedas = /** @class */ (function (_super) {
    __extends(Tragamonedas, _super);
    function Tragamonedas(nombre, apuestaMinima, multiplicador) {
        var _this = _super.call(this, nombre, apuestaMinima) || this;
        _this.multiplicador = multiplicador;
        return _this;
    }
    // Girar ruleta de 3 "columnas"
    Tragamonedas.prototype.girarColumnas = function () {
        var columnas = [1, 2, 3];
        var resultado = [];
        for (var i = 0; i < 3; i++) {
            resultado.push(columnas[Math.floor(Math.random() * columnas.length)]);
        }
        return resultado;
    };
    // Método para hacer la apuesta
    Tragamonedas.prototype.realizarApuesta = function (cantidad) {
        if (cantidad < this.apuestaMinima) {
            return "La apuesta m\u00EDnima es de ".concat(this.apuestaMinima, ".");
        }
        // Gira las columnas
        var resultadoColumnas = this.girarColumnas();
        console.log("Resultado de las columnas: ".concat(resultadoColumnas.join(" - "))); // resultado
        // Comprobar resultado en las columnas
        if (resultadoColumnas[0] === resultadoColumnas[1] && resultadoColumnas[1] === resultadoColumnas[2]) {
            var premio = cantidad * this.multiplicador;
            return "\u00A1Has ganado ".concat(premio, " monedas.");
        }
        else {
            return "Has perdido. \u00A1Mejor suerte la pr\u00F3xima vez!";
        }
    };
    return Tragamonedas;
}(Juego_1.Juego));
exports.Tragamonedas = Tragamonedas;
var TragamonedasX5 = /** @class */ (function (_super) {
    __extends(TragamonedasX5, _super);
    function TragamonedasX5() {
        return _super.call(this, "Tragamonedas X5", 50, 5) || this;
    }
    return TragamonedasX5;
}(Tragamonedas));
exports.TragamonedasX5 = TragamonedasX5;
var TragamonedasX10 = /** @class */ (function (_super) {
    __extends(TragamonedasX10, _super);
    function TragamonedasX10() {
        return _super.call(this, "Tragamonedas X10", 100, 10) || this;
    }
    return TragamonedasX10;
}(Tragamonedas));
exports.TragamonedasX10 = TragamonedasX10;
