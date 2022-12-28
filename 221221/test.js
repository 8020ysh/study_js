// const person = {
//     name: "Hong Gildong",
//     age: 20
// };

// console.log(person['name']);
// console.log(person['age']);


const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong"
    },
    likes:["apple", "samsung"],
    printHello:function(){
        return "Hello";
    }
};

console.log(person['name']['firstName']);

console.log(person['likes'][1]);

console.log(person['printHello']());

console.log(person.name.firstName);

console.log(person.name.lastName);

console.log(person.likes[0]);

console.log(person.printHello());
