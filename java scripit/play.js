var name = "anurag";
var age = 25;
var degigantion = "flutter devloper";

function profile(userName,ageUser,userdegiganation){
    return 'Name is '+userName + ',user age' +ageUser+ ',user degigantion ' +userdegiganation;
}

// const ab = (a,b)=> a+b;


const ab = ()=> a+b;

console.log(ab);

console.log(profile(name,age,degigantion));


const person = {
    name :"anurag",
    age: 20,
    greet(){
        console.log(this.name,this.age);
    }
}
person.greet();


var abcd = ["anurag","tiwari"];
// this is saprate oprator
var newabcd = [...abcd];

var secondabcd = [abcd.splice()];
console.log(newabcd);
console.log(secondabcd);