import { BookCase } from "./bookcase.js"

export class Book extends BookCase{
    author
    category
    dateModified
    constructor(id,author,category) {
        super(id)
        this.author = author
        this.category = category
        this.dateModified = new Date().toISOString()
    }
}