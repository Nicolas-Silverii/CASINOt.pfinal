import { Juego } from './Juego';

export class Tragamonedas extends Juego {
    protected multiplicador: number;

    constructor(nombre: string, apuestaMinima: number, multiplicador: number) {
        super(nombre, apuestaMinima);
        this.multiplicador = multiplicador;
    }

    // Girar ruleta de 3 "columnas"
    private girarColumnas(): number[] {
        const columnas = [1, 2, 3]; 
        const resultado = [];
        for (let i = 0; i < 3; i++) {
            resultado.push(columnas[Math.floor(Math.random() * columnas.length)]);
        }
        return resultado;
    }

    // Método para hacer la apuesta
    public realizarApuesta(cantidad: number): string {
        if (cantidad < this.apuestaMinima) {
            return `La apuesta mínima es de ${this.apuestaMinima}.`;
        }

        // Gira las columnas
        const resultadoColumnas = this.girarColumnas();
        console.log(`Resultado de las columnas: ${resultadoColumnas.join(" - ")}`); // resultado

        // Comprobar resultado en las columnas
        if (resultadoColumnas[0] === resultadoColumnas[1] && resultadoColumnas[1] === resultadoColumnas[2]) {
            const premio = cantidad * this.multiplicador;
            return `¡Has ganado ${premio} monedas.`;
        } else {
            return `Has perdido. ¡Mejor suerte la próxima vez!`;
        }
    }
}


export class TragamonedasX5 extends Tragamonedas {
    constructor() {
        super("Tragamonedas X5", 50, 5); 
    }
}


export class TragamonedasX10 extends Tragamonedas {
    constructor() {
        super("Tragamonedas X10", 100, 10); 
    }
}
