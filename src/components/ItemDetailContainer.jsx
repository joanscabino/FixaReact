import { useParams } from "react-router-dom";
import{ useEffect, useState} from "react"
import Container from 'react-bootstrap/Container';
import { getFirestore, getDoc, doc,} from "firebase/firestore"

/*import { products } from '../data/products';*/
import { ItemDetail } from "./ItemDetail";



export const ItemDetailContainer = () => {
    const [item, setItem] =useState(null);
    const {id} = useParams ();


         /* item detail para consumir 1 elemento de la coleccion*/
         useEffect (()=>{
            const db =getFirestore();
            const refDoc = doc(db, "items", id);
    
            getDoc(refDoc).then((snapshot)=>{
                setItem({id: snapshot.id, ...snapshot.data()});
            });
        }, [id]); /*si escribo id aca se caga*/

  /*  useEffect (()=>{
       const mypromise = new Promise((resolve, reject) => {
            setTimeout(()  => {
                resolve(products);
            }, 2000);
        });

        mypromise.then ((response) => {
                const findById = response.find((item) =>(item.id === Number (id)
                ));
                setItem(findById);
        });
    }, [id]);*/

   

    return (
        <Container className='mt-2'>
           {item ? <ItemDetail item={item}/> : <>Loading..</>}

        </Container>
    );
}