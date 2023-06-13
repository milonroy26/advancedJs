// implicit binding
// const person = function (name, age) {
//     return {
//         name: name,
//         age: age,
//         printName: function () {
//             console.log(this.name);
//         },
//     };
// };

// const sumit = person("Sumit", 38);
// const rabbil = person("Rabbil", 30);
// sumit.printName();
// rabbil.printName();


// my code 

const user = function(name, id){
    return{
        name: name,
        id: id,
        userPrint: function () {
            console.log(this.name)
        },
    };
};

const milon = user('milon', 30);
milon.userPrint();

