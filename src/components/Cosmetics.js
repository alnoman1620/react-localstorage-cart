import React, { useEffect, useState } from 'react';
import Cosmo from './Cosmo/Cosmo';


const Cosmetics = () => {
   const [cosmetics, setCosmetics] = useState([])
   useEffect(()=>{
    fetch('cosmetics.json')
    .then(res => res.json())
    .then(data => setCosmetics(data))
   },[])
    
    return (
        <div>
            <h3>Shop My Cosmetics</h3>
            <small>Create And Load Fake Data</small>
            {
                cosmetics.map(cosmo => <Cosmo 
                    cosmo={cosmo}
                    key={cosmo.id}
                ></Cosmo>)
            }
        </div>
    );
};

export default Cosmetics;