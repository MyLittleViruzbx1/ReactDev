
interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address: Address
}

interface Address {
    postalCode: string;
    city: string;
}


const person: Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 27,
    address:{
        postalCode: 'ABC123',
        city: 'Canada',
    },
}

// const spiderman: Person = {

// }


console.log(person);

// const spiderman = {...person};
// const spiderman = structuredClone(person)

// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 21;
// spiderman.address.city = 'San Francisco';

// console.log({person, spiderman});