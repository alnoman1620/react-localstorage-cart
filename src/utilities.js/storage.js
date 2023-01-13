

function add(num1,num2){
    return num1 + num2
}

const numbs = [1,2,3,4,5,6]
const reducer = (previous,current) => previous + current;
numbs.reduce(reducer,0)

const object = [
    {id:1, name:'Liner',price:200},
    {id:2, name:'Scrub',price:500},
    {id:3, name:'Toner',price:900},
    {id:4, name:'Lip Balm',price:100},
]
//add the price by for of loop
const total = 0;
for (const obb of object){
    total = total + obb.price;
}

//add the price by reducer

const obbReducer = (previous , current) => previous + current.price;
const obbTotal = (obbReducer,0)

export {add , obbTotal}