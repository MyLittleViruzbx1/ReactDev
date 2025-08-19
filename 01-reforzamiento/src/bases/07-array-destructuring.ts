const characterNames = ['Goku', 'Broly', 'Trunks'];

const [, , p1] = characterNames;
console.log({p1})

const returnsArrayFn = () => {
    return['ABC', 123] as const;
}

const [letras, numeros ] = returnsArrayFn();

console.log(letras, numeros)

const useState = (value: string) =>{
    return [value, 
            (name: string) =>{
            console.log(name);
        }] as const;
}
    const [name, setName] = useState('goky')


console.log(name);  //imprime Goky
setName('Broly');    // imprime broly

