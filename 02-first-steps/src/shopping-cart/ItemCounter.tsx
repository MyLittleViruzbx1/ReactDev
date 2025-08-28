import { useState } from "react";



// import './ItemCounter.css';
import style from './ItemCounter.module.css';

interface Props {
  firstGames:string;
  quantity?: number;
}

export const ItemCounter = ({firstGames,quantity = 1}: Props)=> {

  const [count, setCount] = useState(quantity)


  const handleAdd = () =>{
    setCount(count + 1)
  }
  // const handleClick = ()=>{
  //   console.log(`linea ${firstGames}`)
  // }

    const handleSubstract = () =>{
    if(count === 0) return;

    setCount(count - 1)
  }

  return (
    <section 
          // className="item-row"
          className={style['item-row']}
    >
        <span 
        className="item-text"
              style={{
              color: count === 0 ? "red" : 'black',
        }}
        > {firstGames}</span>
        <button

        // onMouseEnter={ () =>{
        //   console.log(`Mouse Enter ${firstGames}`)
        // }}


        onClick={ () =>{
          // console.log(`name ${firstGames}`)
          handleAdd()
        }}
        >+1</button>
        <span>{count}</span>
        <button
        onClick={handleSubstract}
        >-1</button>
    </section>
  )
}
