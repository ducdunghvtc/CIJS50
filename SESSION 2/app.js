// class : bản thiết kế để tạo project

// class person {
//     name;
//     age;
//     sex;
//     appearance;
//     constructor(name, age, sex, appearance) {
//         console.log(name,age,sex,appearance)
//         this.name = name;
//         this.age  = age;
//         this.sex = sex;
//         this.appearance = appearance;
//     }
//     say() {
//         console.log('ahcasda');
//     }
//     introduce() {
//         console.log(`
//             Hello,
//             Mình là ${this.name},
//             Mình năm nay ${this.age} rồi nhưng mình gặp trường hợp này năm 19 tuổi rồi,
//             Ngoại hình của mình ${this.appearance}
//         `)
//     }
// }
// class Car {
//     brand;
//     owner;
//     price;
//     buy_at;
//     constructor(brand,owner,price,buy_at) {
//         this.brand = brand;
//         this.owner = owner;
//         this.price = price;
//         this.buy_at = buy_at;
//         console.log(brand,owner,price,buy_at)
//     }
//     troll() {
//         console.log('lên Hồ Tây nhún nhảy')
//     }
//     introduce() {
//         console.log(`
// Đây là xe ${this.brand} của anh ${this.owner} đẹp trai sở hữu với giá ${this.price}, mua ngày ${this.buy_at} ở cửa hàng đồ chơi
//         `)
//     }
// }
// let bmw = new Car ("BMW","Nguyễn Đức Dũng","10000000000$", new Date().toISOString())


// project : được đẻ từ class ( instance của 1 class)
// let dung = new person("Dũng",21,"Nam","đẹp trai");
// dung.name = "Dũng";
// dung.age = 21;
// dung.sex = "Nam";
// dung.appearance = "abced";
// console.log(dung);
// dung.say();
// dung.introduce()
// bmw.troll()
// bmw.introduce()
// console.log(bmw)


// class person {
//     name;
//     age;
//     sex;
//     address;

//     constructor(name,age,sex,address) {
//         this.name = name;
//         this.age = age;
//         this.sex = sex;
//         this.address = address;
//     }

//     say() {
//         console.log('chào cậu');
//     }

// }
// // kế thừa - extend
// class boy extends person {
//     size;
//     constructor(name,age,address, size) {
//         super(name,age,'Nam',address)
//         this.size = size;
//     }
// }
// let Dung = new boy("Dũng",21,'HN',1)
// console.log(Dung)
// Dung.say()
// class goodboy extends boy {
//     friendzone;
//     constructor(name,age,address,size,friendzone) {
//         super(name,age,address,size)
//         this.friendzone = friendzone;
//     }
//     say() {
//         console.log('à thế à')
//     }
// }
// let ABC = new goodboy('ABC',21,'HCM',0,true)
// console.log(ABC)
// ABC.say()
// class badboy extends boy {
//     overnight;
//     constructor(name,age,address,size,overnight) {
//         super(name,age,address,size)
//         this.overnight = overnight
//     }
//     say() {
//         console.log('badboy')
//     }
// }
// let BADBOY = new badboy('YOBDAB',22,'Huế',0,'overnight')
// console.log(BADBOY)
// BADBOY.say()
// class yellowboy extends boy {
//     amount;
//     constructor(name,age,address,size,amount){
//         super(name,age,address,size)
//         this.amount = amount
//     }
//     static slogan = "aaaaaaa"
//     static live() {
//         console.log('caaaaaaaaaa')
//     }
// }



// // Static
// console.log(yellowboy.slogan)
// yellowboy.live()

// // static - attribute (của class)
// // static - methods ( của class)
// // non-static : attribute ( gọi là att của object đc tạo từ class)
// // non - static : methods ( gọi là met của object đc tạo từ class)


// class crush{
//     firstname;
//     lastname;
//     age;
//     address;
//     constructor(firstname,lastname,age,address) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.age = age;
//         this.address = address;
//     }
//     get Fullname() {
//         return this.lastname + ' ' + this.firstname;
//     }
//     getFullname() {
//         return this.lastname + ' ' + this.firstname;
//     }
// }
// let myCrush = new crush('tiền','đô',21,'ngân hàng')
// console.log(myCrush.Fullname)
// console.log(myCrush.getFullname())


// Bài 1: tìm hiểu về setter
///Trong JavaScript, một Setter có thể được sử dụng để thực thi một hàm bất cứ khi nào một thuộc tính cụ thể được cố gắng thay đổi. 
///Setters thường được sử dụng kết hợp với getters để tạo ra một loại thuộc tính giả. 
//Không thể đồng thời có một bộ định giá trên một thuộc tính có giá trị thực.


// Bài 2: viết chương trình liệt kê crush,nyc bằng person:name,age,sex,address
class person {
    name;
    age;
    sex;
    address;
    constructor(name,age,sex,address){
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }
    // // speak(),introduce()
    speak() {
        console.log('cái đồ không có ny')
    }
    introduce() {
        console.log(`
đây là ${this.name} tuổi ${this.age} , giới tính ${this.sex} đến từ ${this.address}
        `);
    }
}
// // crush kế thừa person: appearance,favorites

class Crush extends person {
    favorites;
    appearance;
    constructor(name,age,address,favorites,appearance){
        super(name,age,"Nữ",address)
        this.favorites = favorites
        this.appearance = appearance
    }
    speak(){
        console.log(`Bạn làm gì đủ trình yêu mình :))`)
    }
}

// // ex kế thừa person : favorites
class Ex extends person {
    favorites
    constructor(name,age,address,favorites){
        super(name,age,"Nữ",address)
        this.favorites = favorites
    }
    speak() {
        console.log(`Mình chia tay anh nhé`)
    }

}
// // list:owner,person[],showAll() - liệt kê hết tất cả 
class list {
    owner
    personList = []
    constructor(owner, personList) {
        this.owner = owner
        this.personList = personList
    }
    showAll() {
        let person = this.personList
        let i = 0;
        while (true) {
            if (person[i] !== undefined) {
                if (person[i].favorites == undefined) {
                    console.log(`Ex name: ${person[i].name},
                     Age: ${person[i].age},
                     Address: ${person[i].address}, 
                     Favorites ${person[i].favorites}`)
                } 
                else {
                    console.log(`crush name: ${person[i].name}, 
                    Age: ${person[i].age}, 
                    Address: ${person[i].address}, 
                    Favorites ${person[i].favorites}, 
                    Appear: ${person[i].appearance}`)
                }
                i++;
            } 
            else break
        }
    }
    addPerson(person) {
        if(person == "Crush"){                                  
          alert('Enter crush information')
          let name = prompt('Name')
          let age = prompt('Age')
          let address = prompt('Address')
          let favorites = prompt('Favorites')
          let appearance = prompt('Appearance')
          let cr = new Crush(name, age, address, favorites, appearance)
          this.personList.push(cr)
        }
        if(person == "Ex"){
          alert('Enter Ex information')
          let name = prompt('Name')
          let age = prompt('Age')
          let address = prompt('Address')
          let favorites = prompt('Favorites')
          let ex = new Ex(name, age, address, favorites)
          this.personList.push(ex)
        }
    }
    
}
let input = prompt('Enter her name')
    let Person = [];
    let listPerson = new list(input, Person)
    while (true) {
        let key = prompt(`Halo ${input}`)
        if (key == 'S') {
            listPerson.showAll()
        } 
        else if (key == 'C') {
            listPerson.addPerson("Crush")
        } 
        else if (key == 'E') {
            listPerson.addPerson("Ex")
        } 
        else break
}
console.log(person[1])