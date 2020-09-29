import {AddNewBookCase} from "./bookcase.js"

let arr = []
let management = new AddNewBookCase(arr)

while(true){
    let type = prompt(`Enter your type :
        (1-add bookcase
         2-show bookcase
         3-delete bookcase
         4-edit bookcase
         5-find book
         6-show books
         7-add books
         8-end`)
    if(type == '1'){
        management.addBookcase()
    }
    else if (type == '2'){
        management.showBookcase()
    }
    else if ( type == '3'){
        management.deleteBookcase()
    }
    else if (type == '4'){
        management.updateBookcase()
    }
    else if (type == '5'){
        management.findBook()
    }
    else if ( type == '6'){
        management.showBook()
    }

    else if (type == '8'){
        break
    }
}
