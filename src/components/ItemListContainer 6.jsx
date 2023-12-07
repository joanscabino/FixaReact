import { useParams } from "react-router-dom";
import{ useEffect, useState, useContext} from "react"
import Container from 'react-bootstrap/Container';

/*import { products } from '../data/products';*/
import { ItemList } from "./ItemList";
import {getFirestore, getDoc,doc, collection, getDocs, query, where,} from "firebase/firestore"



export const ItemListContainer = (props) => {
    const [items, setItems] =useState([]);
    const {id} = useParams ();


    console.log (id)

    useEffect (()=>{
        const db =getFirestore();
        
        const refCollection = !id
         ? collection (db, "items")
        : query(collection(db, "items"), where ("categoryId", "==", id));

        getDocs(refCollection).then((snapshot) => {
         if (snapshot.size === 0) console.log ("no results");
         else
            setItems(
                snapshot.docs.map((doc)=>{
                    return { id: doc.id, ...doc.data()};
                })
            );
        });
    }, [id]);


/*useEffect (() => {
    const db = getFirestore();


    
    const refCollection = collection (db, "items");

    getDocs (refCollection).then((snapshot)=>{
        if (snapshot.size === 0) console.log("No Results");
        else
         setItems(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data()};
          })
        )
    });
}, []);*/


  

   /* useEffect (() => {
        const db = getFirestore();
        
        const refDoc = doc(db, "items", "EPVVvkE5i7ajgfCRL2A9");

        getDoc(refDoc). then((snapshot) => {
            console.log({id:snapshot.id, ...snapshot.data()});
        });
    }, []);*/

    /*useEffect (()=>{
       const mypromise = new Promise((resolve, reject) => {
            setTimeout(()  => {
                resolve(products);
            }, 2000);
        });

        mypromise.then ((response) => {
            if (!id) {
                setItems(response);  
            } else {
                const filteByCategory = response.filter((item) =>item.category ===id
                );
                setItems(filteByCategory);
            }
        });
    }, [id])*/

   

    return (
        <Container className='mt-2'>
            <h1>{props.greeting}</h1>
            <ItemList items = {items} />
        </Container>
    );
}