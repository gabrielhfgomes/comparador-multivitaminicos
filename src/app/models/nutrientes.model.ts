import { Nutriente } from "./nutriente.model";

export class Nutrientes {

    constructor(cromoValor: number, ferroValor: number, magnesioValor: number, zincoValor: number) {
        this.cromo = {
            label: "Cromo",
            valor: cromoValor
        }
        this.ferro = {
            label: "Ferro",
            valor: ferroValor
        }
        this.magnesio = {
            label: "Magnésio",
            valor: magnesioValor
        }
        this.zinco = {
            label: "Zinco",
            valor: zincoValor
        }
    }

    cromo: Nutriente;
    ferro: Nutriente;
    magnesio: Nutriente;
    zinco: Nutriente;
    iodo: Nutriente;
    cobre: Nutriente;
    selênio: Nutriente;
    molibdênio: Nutriente;
    vitamina_a: Nutriente;
    vitamina_b: Nutriente;
    vitamina_d: Nutriente;
    vitamina_e: Nutriente;
    vitamina_k: Nutriente;
    vitamina_b1: Nutriente;
    vitamina_b2: Nutriente;
    vitamina_b6: Nutriente;
    vitamina_b12: Nutriente;
    niacina: Nutriente;
    acido_pantotenico: Nutriente;
    biotina: Nutriente;
    acido_folico: Nutriente;
    sodio: Nutriente;




}