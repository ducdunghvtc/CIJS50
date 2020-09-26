
import {AddNewTest} from "./test.js";
import {AddNewQuest} from "./quest.js";

let arr1 = []
let arr2 = []
let actionTest = new AddNewTest(arr1)
let actionQuest = new AddNewQuest(arr2)

while(true){
    let request = prompt(`Enter your request :
        (1-add test
         2-show test
         3-add quest
         4-delete quest
         5-edit quest
         6-show quest)`)
    if(request == '1'){
        actionTest.addTest()
    }
    else if (request == '2'){
        actionTest.showTest()
    }else if (request == '3') {
        actionQuest.addQuest()
    }
    else if ( request == '4'){
        actionQuest.deleteQ()
    }
    else if (request == '5'){
        actionQuest.editQ()
    }
    else if (request == '6'){
        actionQuest.showQuest()
    }
    else break
}
