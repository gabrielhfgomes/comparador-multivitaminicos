import { Category } from "./category.model";

export class Audio {
    id: number
    name: string;
    path: string;
    description: string;
    category: Category;

    constructor(description: string, name: string, category: Category) {
        this.name = name;
        this.description = description;
        this.category = category;
    }
}