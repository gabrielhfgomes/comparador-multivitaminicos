import { Nutriente } from "./nutriente.model";

export class Multivitaminico {
    id: number;
    nome: string;
    pathToImg: string;
    tamanho: number;
    capsulas: number;
    nutrientes: Nutriente[];

    constructor(id: number, nome: string, pathToImg: string, tamanho: number, capsulas: number,
        cromoValor: number, ferroValor: number, magnesioValor: number, zincoValor: number,
        iodoValor: number, selenioValor: number, cobreValor: number, molibdenioValor: number, 
        vitaminaAValor: number, vitaminaDValor: number, vitaminaEValor: number,
        vitaminaKValor: number, vitaminaB1Valor: number, vitaminaB2Valor: number, vitaminaB3Valor: number,
        vitaminaB5Valor: number, vitaminaB6Valor: number, vitaminaB9Valor: number,
        vitaminaB12Valor: number, biotinaValor: number, sodioValor: number, calcioValor: number,
        vitaminaCValor: number, cloroValor: number, fosforoValor: number, potassioValor: number,
        manganesValor: number) {
            
        this.id = id;
        this.nome = nome;
        this.pathToImg = pathToImg;
        this.tamanho = tamanho;
        this.capsulas = capsulas;

        this. nutrientes = [{
            label: "Cromo",
            valor: cromoValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Ferro",
            valor: ferroValor,
            unidadeDeMedida: "mg"

        },
        {
            label: "Magnésio",
            valor: magnesioValor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Zinco",
            valor: zincoValor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Iodo",
            valor: iodoValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Cobre",
            valor: cobreValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Selênio",
            valor: selenioValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Molibdênio",
            valor: molibdenioValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Cálcio",
            valor: calcioValor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Vitamina A",
            valor: vitaminaAValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Vitamina C",
            valor: vitaminaCValor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Vitamina D",
            valor: vitaminaDValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Vitamina E",
            valor: vitaminaEValor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Vitamina K",
            valor: vitaminaKValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Vitamina B1 (Tiamina)",
            valor: vitaminaB1Valor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Vitamina B2 (Riboflavina)",
            valor: vitaminaB2Valor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Vitamina B3 (Niacina)",
            valor: vitaminaB3Valor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Vitamina B5 (Ácido Pantotênico)",
            valor: vitaminaB5Valor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Vitamina B6 (Piridoxina)",
            valor: vitaminaB6Valor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Vitamina B9 (Ácido Fólico)",
            valor: vitaminaB9Valor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Vitamina B12 (Cianocobalamina)",
            valor: vitaminaB12Valor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Vitamina H (Biotina)",
            valor: biotinaValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Sodio",
            valor: sodioValor,
            unidadeDeMedida: "mg"
        },
        {
            label: "Cloro",
            valor: cloroValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Fósforo",
            valor: fosforoValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Potássio",
            valor: potassioValor,
            unidadeDeMedida: "mcg"
        },
        {
            label: "Manganês",
            valor: manganesValor,
            unidadeDeMedida: "mg"
        }
    ];
    }

    calculatePercentual(multi1: Multivitaminico) {
        for(let i = 0; i < this.nutrientes.length; i++) {
            if(this.nutrientes[i].valor == 0 && multi1.nutrientes[i].valor == 0) {
                this.nutrientes[i].percentCompareColor = "color: blue";
                this.nutrientes[i].percentCompareString = "0%"
            } else if(this.nutrientes[i].valor < multi1.nutrientes[i].valor) {
              this.nutrientes[i].percentCompareColor = "color: green";
              this.nutrientes[i].percentCompareString = "+" + ((1-(this.nutrientes[i].valor/multi1.nutrientes[i].valor))*100).toFixed(1).toString() + "%"
            } else if(this.nutrientes[i].valor == multi1.nutrientes[i].valor){
              this.nutrientes[i].percentCompareColor = "color: blue";
              this.nutrientes[i].percentCompareString = ((1-(multi1.nutrientes[i].valor/this.nutrientes[i].valor))*100).toFixed(1).toString() + "%"
            } else {
              this.nutrientes[i].percentCompareColor = "color: red";
              this.nutrientes[i].percentCompareString = "-" + ((1-(multi1.nutrientes[i].valor/this.nutrientes[i].valor))*100).toFixed(1).toString() + "%"
            }
        }
    }
}