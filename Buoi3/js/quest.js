class Questions{
    id
    content
    correctAnswer
    constructor(id, content, correctAnswer){
        this.id = id
        this.content = content
        this.correctAnswer = correctAnswer
    }
}
class MultipleChoice extends Questions {
    constructor(id,content,correctAnswer) {
        super(id,content,correctAnswer)
    }
}
class Essay extends Questions {
    constructor(id,content,correctAnswer){
        super(id,content,correctAnswer)
    }
}
class AddNewQuest {
    newquest = []
    constructor(newquest) {
        this.newquest = newquest
    }
    addQuest(){
        let id = prompt('Enter new id')
        let content = prompt('Enter new content')
        let correctAnswer = prompt('Enter new correct answer')
        let newQuest = new Questions(id,content,correctAnswer)
        this.newquest.push(newQuest)
    }
    editQ(){
        let index = prompt("Enter ID you want to edit");
        let edit = prompt("Enter content you want to edit");
        this.questions[index - 1] = edit

    }
    deleteQ(){
        let index = prompt("Enter ID you want to delete");
        this.questions.splice(index - 1,1);
    }
    showQuest(){
        for(let i=0; i < this.newquest.length;i++){
            console.log(this.newquest[i])
        }
    }

}
export {Questions,MultipleChoice,Essay,AddNewQuest}