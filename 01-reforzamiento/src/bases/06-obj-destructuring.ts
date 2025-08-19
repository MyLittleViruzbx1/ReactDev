const person = {
    name: 'marlon',
    age: 25,
    key: 'Heroe',
}

const {name,age, key} = person;

// const name = person.name;
// const age = person.age;
// const key = person.key;

console.log({name,age,key});


interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string
}


const useContext = ({key, name, age, rank}: Hero) => {

    return {
        keyName: key,
        user: {
            name: name,
            age: age
        },
        rank: rank
    }
}


const {rank, keyName} = useContext(person);
// const {user:{nombre: name, edad:age}} = useContext(person);

console.log({rank: rank, keyName: keyName, user:{nombre:name, edad:age}})




