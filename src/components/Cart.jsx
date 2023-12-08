import { useContext, useState } from "react";
import { Container,Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Table from 'react-bootstrap/Table';

import { CartContext } from "../contexts/CartContexts";

import {getFirestore,collection,addDoc} from "firebase/firestore";

const initialValues = {
    name: "",
    email: "",
    phone: "" 
};

export const Cart = () => {

    const {clear,items,onRemove} = useContext(CartContext);
    const [buyer, setBuyer] =useState(initialValues)
    const navigate = useNavigate ();

    const handleChange = () => {
        setBuyer (buyer => {
            return{
                ...buyer,
                [event.target.name]: event.target.value,
            };
        });
    };
    
    const sendOrder = () =>{
    const order = {
      buyer,
      name,
      items,
      total: 13600,
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        alert("Su orden: " + id + " ha sido completada!");
        setBuyer(initialValues);
        clear();
      }
    });
  };

    

    if (!items.length){
        return <Container className='mt-4'>
            <h2>Carrito Vacio</h2>
            <button onClick ={()=> navigate("/")}>Volver a la Home </button>
            </Container>;
    };


    /*cheqout*/
      const total = items.reduce(
        (acumulador,valorActuar) =>
        acumulador +valorActuar.quantity * valorActuar.price, 0);


    return <Container className='mt-4'>
        <h1>Carrito</h1>

    <Table striped="columns">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cantidad</th>
          <th>Imagen</th>
          <th>Precio</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {items?.map (item =>( <tr key ={item.id}>
          <td>{item.title}</td>
          <td>{item.quantity}</td>
          <td><img src={item.pictureUrl} width = {400}/></td>
          <td>{item.price}</td>
          <td onClick={() => onRemove(item.id)}>x</td>
        </tr>
        ))}
        <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>{total}</td>
        </tr>
      </tbody>
    </Table>
        <button onClick={clear}>Vaciar Carrito</button>
        <hr />

    <Form>
        <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={buyer.email} onChange = {handleChange} name= "email"/>
        </Form.Group>

        <Form.Group classNAme= "mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" value={buyer.name} onChange = {handleChange} name= "name" required />
        </Form.Group>
    
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="phone" require placeholder="Enter phone" value={buyer.phone} onChange = {handleChange} name= "phone"/>
      </Form.Group>


      <Button variant="primary" onClick={sendOrder}>Enviar
      </Button>
    </Form>
    </Container>;
};