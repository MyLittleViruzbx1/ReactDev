import { ItemCounter } from './shopping-cart/ItemCounter';


interface ItemInCart {
    producName: string;
    quiality: number;
}

 const ItemsInCar: ItemInCart[] = [
                    {producName: 'PlayStation1', quiality: 1},
                    {producName: 'PlayStation2', quiality: 12},
                    {producName: 'PlayStation3', quiality: 13},
            ]

export function FirstApp(){
    return(
        <>
            <h1>Shopping Cart</h1>
            <p>Estoy aprendiendo react</p>

            <button>Click me</button>
                {/* <ItemCounter firstGames="PlayStation3" quantity={3} />
                   <ItemCounter firstGames="PlayStation2" quantity={2} />
                      <ItemCounter firstGames="PlayStation1" quantity={1}/>
                         <ItemCounter firstGames="SuperNintendo 64" quantity={64}/> */}
            {ItemsInCar.map(({ producName, quiality}) =>(
                 <ItemCounter key={producName} firstGames={producName} quantity={quiality} />
            ))}
        </>
    )
}