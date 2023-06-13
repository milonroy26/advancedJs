// const printName = function (v1, v2, v3) {
//     console.log(`${this.name} has 3 virtues: ${v1}, ${v2}, ${v3}`);
// };

// const sumit = {
//     name: "Sumit",
//     age: 38,
// };

// const v1 = "playing cricket";
// const v2 = "content creator";
// const v3 = "father";
// const virtues = [v1, v2, v3];

// printName.call(sumit, v1, v2, v3);
// printName.apply(sumit, virtues);

// const bindFunction = printName.bind(sumit, v1, v2, v3);
//////

// bindFunction();



// my code............

const userDataPrint = function(age, city, location){
    console.log(`Hi My name is ${this.name} My age ${age}, I am form ${city} Area name is ${location}.`);
}

const milon = {
    name: 'Milon Chandro',
    play: 'football'
}

// ai function morde ami 3ta pramiter nibo.Ami akne 3ta variable morde kicu value nialm, agula peramiter hisabe nibo.
const age = 30;
const city = "Bangladesh";
const location = "Rangpure";

const myArray = [age, city, location];

// userDataPrint.call(milon, age, city, location); //🤔name undifind astace kno?
// call apply : call aply korle kma dia pramiter gula dite hbe.
// userDataPrint.apply(milon, myArray);
// apply ami function peramitter gula array te store kre ragte pari and pore oi functioner arguments hisabe oi array variable ta dia dite pari.
const bindUser = userDataPrint.bind(milon, age, city, location);
bindUser();
// bind ami akta variable morde store kore reka dila oi variable ta jkn run korbo jast tkn call hbe.


