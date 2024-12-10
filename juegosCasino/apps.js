"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Casino_1 = require("../clases/Casino");
var Tragamonedas_1 = require("../clases/Tragamonedas");
var Ruleta_1 = require("../clases/Ruleta");
// Crear instancia del casino
var casino = new Casino_1.Casino();
// Crear instancias de los juegos
var tragamonedasX5 = new Tragamonedas_1.TragamonedasX5();
var tragamonedasX10 = new Tragamonedas_1.TragamonedasX10();
var ruleta = new Ruleta_1.Ruleta();
// Agregar juegos al casino
casino.agregarJuego(tragamonedasX5);
casino.agregarJuego(tragamonedasX10);
casino.agregarJuego(ruleta);
// Iniciar juego
casino.jugar();
