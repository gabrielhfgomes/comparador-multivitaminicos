import { Category } from "./category.model";

export class Audio {
    id: number
    name: string;
    path: string;
    description: string;
    category: Category;
    file: File;

    constructor(description: string, name: string, category: Category, file: File) {
        this.name = name;
        this.description = description;
        this.category = category;
        this.file = file;
    }
}