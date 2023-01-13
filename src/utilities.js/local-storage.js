//get info from local storage
const getDb = id=> localStorage.getItem('shoppingCart')

const addToDb = id => {
    const exist = getDb()
    let shoppingCart = {};
    if(!exist){
        
        shoppingCart[id] = 1;
        localStorage.setItem(id,1)
    }
    else{
        shoppingCart = JSON.parse(exist);
        if(shoppingCart[id]){
            const newCount = shoppingCart[id] + 1;
            shoppingCart[id] = newCount;

        }
        else{
            shoppingCart[id] = 1;
        }
    }
    updateDb(shoppingCart)
}


const removeFromDb = id =>{
    const exist = getDb()
    if(!exist){

    }
    else{
        const shoppingCart = JSON.parse(exist)
        delete shoppingCart[id]
        updateDb(shoppingCart)
    }
}

const updateDb = cart =>{
    localStorage.setItem('shoppingCart', JSON.stringify(cart))
}
export {addToDb , removeFromDb as deleteFromDb}