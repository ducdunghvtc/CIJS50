export class Book{
    id
    books_name
    author
    category
    dateModified
    constructor(id,books_name,author,category) {
        this.id = id
        this.books_name = books_name
        this.author = author
        this.category = category
        this.dateModified = new Date().toISOString()
    }
}
