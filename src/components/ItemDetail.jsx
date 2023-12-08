import { useContext } from "react";

import { ItemCounter } from "./ItemCounter"
import { CartContext } from "../contexts/CartContexts";

export const ItemDetail = ({item}) => {
  const {onAdd} = useContext(CartContext)

  const Add = (quantity) =>{
    onAdd(item,quantity);
  }

    return(
     <>
    <h1>{item.title}</h1>
    <img src={item.pictureUrl} width= {500}/>
    <h2>Stock:{item.stock}</h2>
    <><p>{item.description}</p></>
    <ItemCounter onAdd ={Add} stock= {item.stock} initial= {1}/>
    </>
    );
};

