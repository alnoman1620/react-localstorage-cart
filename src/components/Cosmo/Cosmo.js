import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities.js/local-storage';

const Cosmo = (props) => {
    const {name,id,price} = props.cosmo
    //saving data in local storage
    const handlePurchase = id =>{
        console.log(id)
        addToDb(id)
    }
const handleRemove =id =>{
    deleteFromDb(id)
}

    return (
        <div>
            <h1><small>{id}.  </small>Name: {name}</h1>
            <h3>price: {price}</h3>
            <button onClick={()=> handlePurchase(id)}> Purchase</button>
            <button onClick={()=> handleRemove(id)}> Remove</button>
        </div>
    );
};

export default Cosmo;