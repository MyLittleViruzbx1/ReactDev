import { heroes, type Hero, Owner } from '../data/heroes.data';


const getHeroById = (id: number): Hero | undefined =>{
    const heroe = heroes.find((heroe) => {
        return heroe.id === id;
    })
    // if(!heroe) {
    //     throw new Error(`El heroe no existe! ${id}`);
    // }else{
    //     console.log(heroe);
    // }

    return heroe;
};

console.log(getHeroById(1));


export const getHeroesByOwnder = (owner: Owner): Hero[] =>{
   return heroes.filter((hero) => hero.owner === owner);
   
}
