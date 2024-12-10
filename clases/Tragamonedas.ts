import { JuegoBase } from '../clases/JuegoBase';

export class Tragamonedas extends JuegoBase {
    protected multiplicador: number;
    protected frutas: string[] = ['🍒', '🍊', '🍋', '🍉']; 
    protected numColumnas: number;  

    constructor(nombre: string, apuestaMinima: number, multiplicador: number, numColumnas: number) {
        super(nombre, apuestaMinima);
        this.multiplicador = multiplicador;
        this.numColumnas = numColumnas; 
    }

    private girarColumnas(): string[] {
        const resultado: string[] = [];
        for (let i = 0; i < this.numColumnas; i++) { 
            resultado.push(this.frutas[Math.floor(Math.random() * this.frutas.length)]);
        }
        return resultado;
    }

    public realizarApuesta(cantidad: number, numeroElegido?: number): string {
        if (cantidad < this.apuestaMinima) {
            return `La apuesta mínima es de ${this.apuestaMinima} monedas.`;
        }

        const resultadoColumnas = this.girarColumnas();
        console.log(`Resultado de las columnas: ${resultadoColumnas.join(" - ")}`);

        if (resultadoColumnas.every(fruta => fruta === resultadoColumnas[0])) { 
            const premio = cantidad * this.multiplicador;
            return `¡Has ganado ${premio} monedas!`;
        } else {
            return `Has perdido. ¡Mejor suerte la próxima vez!`;
        }
    }
}

export class TragamonedasX5 extends Tragamonedas {
    constructor() {
        super("Tragamonedas X5", 50, 5, 3); 
    }
}

export class TragamonedasX10 extends Tragamonedas {
    constructor() {
        super("Tragamonedas X10", 100, 10, 4); 
    }
}
