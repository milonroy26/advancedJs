const fName = "joy";

const myObject = {
   fName: "jeson",
   lName: "deo",
   age: 30,
   fullName: function(){
     return fName + " " + this.lName;
   } 
}

const myName = myObject.fullName();
console.log(`My name is : ${myName}`);