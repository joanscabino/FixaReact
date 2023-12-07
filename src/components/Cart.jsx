import { useContext } from "react";
import { Container } from "react-bootstrap";

import { CartContext } from "../contexts/CartContexts";

import {getFirestore, getDoc,doc, collection, getDocs, query, where,} from "firebase/firestore"

export const Cart = () => {

    const {clear,items} = useContext(CartContext);



    return <Container className='mt-4'>
        <h1>Carrito</h1>
        {items?.map (item => <div key ={item.id}>
            <h2>{item.nombre}</h2>
            <h3>{item.precio}</h3>
            <img src={item.foto} width = {400}/>
        </div>)}
        <button onClick={clear}>Vaciar Carrito</button>
    </Container>;
};