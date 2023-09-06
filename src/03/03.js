// Примитивы
// string
// number
// boolean
// null
// undefined
// BigInt
// Symbol

// //Cсылочный тип данных
// objects Arrays


// {} - []
//
// const object = {};
// const array = [];
//
//
// const object2 = new Object();
// const array2 = new Array();

let array1 = [-12, 0 ,55,69,1,23,3,54,57]
// console.log(array1)
// array1.push(6)
// console.log(array1)
// array1.shift()
// console.log(array1)

// map и filter

let newArray = array1.map( el => el * 2)

console.log(newArray) // [2,3,4,5,6]

let filtredValues = array1.filter(el=> el > 40)
console.log(filtredValues)
console.log(array1)


const human = {
    name: 'John Doe',
    age: 30,
    isStudent: false,
    hobbies: ['reading', 'painting', 'swimming'],
    address: {
        street: '123 Main St',
        city: 'New York',
        country: 'USA'
    },
    education: {
        degree: 'Bachelor',
        major: 'Computer Science',
        university: {
            name: 'ABC University',
            location: 'XYZ City'
        }
    }
};

// ...
// spread operator


const copyHuman1 = {...human}
console.log(human === copyHuman1)

const copyHuman2 = {...human,
    hobbies: [...human.hobbies],
    address: {...human.address},
    education: {...human.education, university: {...human.education.university}}
}

console.log(human === copyHuman2)

const human2 = {
    name: 'John Doe',
    age: 30,
    isStudent: false,
}
const human3 = {...human2}
console.log(human2 === human3)