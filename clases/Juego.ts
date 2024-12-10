export interface Juego {
    getNombre(): string;
    realizarApuesta(cantidad: number, numeroElegido?: number): string;
    getApuestaMinima(): number;
}
