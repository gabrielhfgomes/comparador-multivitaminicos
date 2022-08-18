import { Nutrientes } from "./nutrientes.model";

export class Multivitaminico {
    id: number;
    nome: string;
    pathToImg: string;
    tamanho: number;
    nutrientes: Nutrientes;
}