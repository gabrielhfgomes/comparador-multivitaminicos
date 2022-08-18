import { Nutriente } from "./nutriente.model";

export class Multivitaminico {
    id: number;
    nome: string;
    pathToImg: string;
    tamanho: number;
    nutrientes: Nutriente[];

    constructor(id: number, nome: string, pathToImg: string, tamanho: number,
        cromoValor: number, ferroValor: number, magnesioValor: number, zincoValor: number,
        iodoValor: number, selenioValor: number, cobreValor: number, molibdenioValor: number, 
        vitaminaAValor: number, vitaminaBValor: number, vitaminaDValor: number, vitaminaEValor: number,
        vitaminaKValor: number, vitaminaB1Valor: number, vitaminaB2Valor: number, vitaminaB3Valor: number) {
            
        this.id = id;
        this.nome = nome;
        this.pathToImg = pathToImg;
        this.tamanho = tamanho;

        this. nutrientes = [{
            label: "Cromo",
            valor: cromoValor
        },
        {
            label: "Ferro",
            valor: ferroValor
        },
        {
            label: "Magnésio",
            valor: magnesioValor
        },
        {
            label: "Zinco",
            valor: zincoValor
        },
        {
            label: "Iodo",
            valor: iodoValor
        },
        {
            label: "Cobre",
            valor: cobreValor
        },
        {
            label: "Selênio",
            valor: selenioValor
        },
        {
            label: "Molibdênio",
            valor: molibdenioValor
        },
        {
            label: "Vitamina A",
            valor: vitaminaAValor
        },
        {
            label: "Vitamina B",
            valor: vitaminaBValor
        },
        {
            label: "Vitamina D",
            valor: vitaminaDValor
        },
        {
            label: "Vitamina E",
            valor: vitaminaEValor
        },
        {
            label: "Vitamina K",
            valor: vitaminaKValor
        },
        {
            label: "Vitamina B1",
            valor: vitaminaB1Valor
        },
        {
            label: "Vitamina B2",
            valor: vitaminaB2Valor
        },
        {
            label: "Vitamina B3",
            valor: vitaminaB3Valor
        }]
    }

    calculatePercentual(multi1: Multivitaminico) {
        
        for(let i = 0; i < this.nutrientes.length - 1; i++) {
            if(this.nutrientes[i].valor < multi1.nutrientes[i].valor) {
              this.nutrientes[i].percentCompareColor = "color: green";
              this.nutrientes[i].percentCompareString = "+" + ((1-(this.nutrientes[i].valor/multi1.nutrientes[i].valor))*100).toString() + "%"
            } else if(this.nutrientes[i].valor == multi1.nutrientes[i].valor){
              this.nutrientes[i].percentCompareColor = "color: blue";
              this.nutrientes[i].percentCompareString = ((1-(multi1.nutrientes[i].valor/this.nutrientes[i].valor))*100).toString() + "%"
            } else {
              this.nutrientes[i].percentCompareColor = "color: red";
              this.nutrientes[i].percentCompareString = "-" + ((1-(multi1.nutrientes[i].valor/this.nutrientes[i].valor))*100).toString() + "%"
            }
        }
        

    }
}