const greet =(name: string):string => `Hola ${name}`
    // return `Hola ${name}`
    // return 123;

const freet2 = (name:string)=> {
     return `Hola ${name}`
}

const message = greet('zebas');
const message2 = freet2('zeba3');


interface User {
    uid: string;
    username: string;
    // color: string;
}

function getUser(): User{
    return {
        uid:'123',
        username: 'maik',
    }
} 


const getUser2 = () =>  ({uid2: '1234',username: 'maik'});



const user = getUser();
const user2 = getUser2();

console.log(user);
console.log(user2);

console.log(message, message2);


const myNumbers = [1,2,3,4,5,6];

// myNumbers.forEach(function(value){
//     console.log({value})
// })

myNumbers.forEach((value) =>{
    console.log({value})
})