export class BookCase {
    id
    max_number_books
    books_name
    dateModified
    constructor(id,max_number_books,books_name){
        this.id = id
        this.max_number_books = max_number_books
        this.books_name = books_name
        this.dateModified = new Date().toISOString()
    }
}
export class AddNewBookCase {
    bookcase = []
    constructor(bookcase) {
        this.bookcase   = bookcase
    }
    addBookcase(){
        let id = prompt('Enter new id')
        let max_number_books = prompt('Enter maximum number of books contained')
        let books_name = prompt('Enter books ')
        let category = prompt('Enter category')
        let author = prompt('Enter author')
        let Bookcase = new BookCase(id,max_number_books,books_name,author,category)
        this.bookcase.push(Bookcase)
    }
    updateBookcase(){
        let index = prompt("Enter ID you want to update");
        let update = prompt("Enter bookcase you want to update");
        this.bookcase[index - 1] = update

    }
    deleteBookcase(){
        let index = prompt("Enter ID you want to delete");
        this.bookcase.splice(index - 1,1);
    }
    showBookcase(){
        for(let i=0; i < this.bookcase.length;i++){
            console.log(this.bookcase[i])
        }
    }
    findBook(){
        let property = prompt("Enter property you want to find");
        for(let i = 0; i < this.bookcase.length; i++)
        {
            console.log(this.bookcase[i][property]);
        }
    }
    addBook(){
        let books_name = prompt('Enter books name you want to add')
        let author = prompt('Enter author')
        let category = prompt('Enter category')
        let newbooks = new Book(books_name,author,category)
        this.books.push(newbooks)
    }
    showBook(){
        for(let i = 0; i < this.bookcase.length; i++){
            console.log(this.bookcase[i]["books"]);
        }
    }
}
