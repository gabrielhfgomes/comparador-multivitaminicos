import { Multivitaminico } from "./multivitaminico.model";

export class Nutriente {

    constructor(label: string, valor: number) {
        this.label = label;
        this.valor = valor;
    }

    label: string;
    valor: number;
    percentCompare?: number;
    percentCompareString?: string;
    percentCompareColor?: string;
}