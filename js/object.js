// create object using object literals

const player={};

player.name='hemonto';
player.specialty='batsman';
player.bat=function(){
    console.log('swing your bat');
}
console.log(player);
player.bat();



const student={
    name:'hemo',
    job:'bekar',
    ball: function(){
        console.log("through the ball")
    },
    salary: 45000
}


// object constructor


// const person=new Object();
// console.log(person);


// class object

class person1{
    name='abul';
    address='dhaka';
    constructor(age){
        this.age=age;
    }
}
const person2= new person1(56);
console.log(person2);
