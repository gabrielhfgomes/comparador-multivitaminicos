import { Nutriente } from "./nutriente.model";

export class Nutrientes {

    constructor(cromoValor: number, ferroValor: number, magnesioValor: number, zincoValor: number,
        iodoValor: number, selenioValor: number, cobreValor: number, molibdenioValor: number, 
        vitaminaAValor: number, vitaminaBValor: number, vitaminaDValor: number, vitaminaEValor: number,
        vitaminaKValor: number, vitaminaB1Valor: number, vitaminaB2Valor: number, vitaminaB3Valor: number) {
            
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
        this.iodo = {
            label: "Iodo",
            valor: iodoValor
        }
        this.cobre = {
            label: "Cobre",
            valor: cobreValor
        }
        this.selenio = {
            label: "Selênio",
            valor: selenioValor
        }
        this.molibdenio = {
            label: "Molibdênio",
            valor: molibdenioValor
        }
        this.vitamina_a = {
            label: "Vitamina A",
            valor: vitaminaAValor
        }
        this.vitamina_b = {
            label: "Vitamina B",
            valor: vitaminaBValor
        }
        this.vitamina_d = {
            label: "Vitamina D",
            valor: vitaminaDValor
        }
        this.vitamina_e = {
            label: "Vitamina E",
            valor: vitaminaEValor
        }
        this.vitamina_k = {
            label: "Vitamina K",
            valor: vitaminaKValor
        }
        this.vitamina_b1 = {
            label: "Vitamina B1",
            valor: vitaminaB1Valor
        }
        this.vitamina_b2 = {
            label: "Vitamina B2",
            valor: vitaminaB2Valor
        }
        this.vitamina_b3 = {
            label: "Vitamina B3",
            valor: vitaminaB3Valor
        }
    }

    cromo: Nutriente;
    ferro: Nutriente;
    magnesio: Nutriente;
    zinco: Nutriente;
    iodo: Nutriente;
    cobre: Nutriente;
    selenio: Nutriente;
    molibdenio: Nutriente;
    vitamina_a: Nutriente;
    vitamina_b: Nutriente;
    vitamina_d: Nutriente;
    vitamina_e: Nutriente;
    vitamina_k: Nutriente;
    vitamina_b1: Nutriente;
    vitamina_b2: Nutriente;
    vitamina_b3: Nutriente;
    vitamina_b5: Nutriente;
    vitamina_b6: Nutriente;
    vitamina_b12: Nutriente;
    niacina: Nutriente;
    acido_pantotenico: Nutriente;
    biotina: Nutriente;
    acido_folico: Nutriente;
    sodio: Nutriente;

    getCromo() {
        return this.cromo;
    }

}