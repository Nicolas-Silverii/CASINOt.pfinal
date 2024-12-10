import { Casino } from '../clases/Casino'; 
import { TragamonedasX5, TragamonedasX10 } from '../clases/Tragamonedas';
import { Ruleta } from '../clases/Ruleta';  

// Crear instancia del casino
const casino = new Casino();

// Crear instancias de los juegos
const tragamonedasX5 = new TragamonedasX5();
const tragamonedasX10 = new TragamonedasX10();
const ruleta = new Ruleta();  

// Agregar juegos al casino
casino.agregarJuego(tragamonedasX5);
casino.agregarJuego(tragamonedasX10);
casino.agregarJuego(ruleta);

// Iniciar juego
casino.jugar(); 
 