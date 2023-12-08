import { useState } from "react";

export const ItemCounter = ({onAdd, stock, initial}) => {
  const[count, setCount] = useState(initial)

  const handleIncreaseCount = () => {
    if(stock > count)
    setCount (prev => prev+1)
  }
  const handleDecreaseCount = () => {
    setCount (prev => prev-1)
  }
  const handleAdd = () =>{
    onAdd(count)
    setCount(initial)
  }

 
    return (
      <>
      <div style ={{display: "flex"}}>
       <div onClick={handleDecreaseCount}>-</div>
       <input value={count}/>
       <div onClick ={handleIncreaseCount}>+</div>
       </div>
       <button onClick= {handleAdd}>Agregar al carrito</button>
      </>
    );
};