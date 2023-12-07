import { useContext } from "react";

import { ItemCounter } from "./ItemCounter"
import { CartContext } from "../contexts/CartContexts";

export const ItemDetail = ({item}) => {
  const {onAdd} = useContext(CartContext)

  const Add = () =>{
    onAdd(item);
  }

    return(
     <>
    <h1>{item.title}</h1>
    <img src={item.pictureUrl} width= {500}/>
    <><p>{item.description}</p></>
    <ItemCounter onAdd ={Add}/>
    </>
    );
};

