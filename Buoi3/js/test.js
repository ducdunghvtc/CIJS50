class Test {
    id
    testName
    time
    questions
    dateCreated
    constructor(id, testName, time, questions, dateCreated){
        this.id = id
        this.testName = testName
        this.time = time
        this.questions = questions
        this.dateCreated = dateCreated
    }
}
class AddNewTest {
    newTest = []
    constructor(newTest){
        this.newTest = newTest
    }
    addTest(){
        let id = prompt('Enter new id')
        let testname = prompt('Enter new test name')
        let time = prompt('Enter time test')
        let questions = prompt('Enter new questions')
        let datecreated = prompt('Enter date created')
        let newtest = new Test(id,testname,time,questions,datecreated)
        this.newTest.push(newtest)
    }
    showTest(){
        for(let i=0; i< this.newTest.length;i++){
            console.log(this.newTest[i])
        }
    }
}
export {Test,AddNewTest}