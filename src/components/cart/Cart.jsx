import { useEffect } from "react";
import { useState } from "react";
import Carts from "./Carts";
// import Clause from "./Clause";



const Cart = ({clickHandler}) => {

    const [actor,setActor]=useState([])
    

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setActor(data))
    },[])

    return (
        <div className="bg-gray-400 px-32 rounded-lg ">
            <h4 className="font-semibold mb-10 mt-5">Avengers: {actor.length} </h4>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    actor.map(actor=><Carts key={actor.id} actor={actor} clickHandler={clickHandler}></Carts>)
                }

            </div>
            
        </div>
    );
};

export default Cart;