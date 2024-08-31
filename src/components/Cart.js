import React from "react"
import { useDispatch, useSelector } from "react-redux"
import Foodcart from "./Foodcart";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items);
     const csscartStyle ={
         display:"flex",
        margin:"50px",
        

     };
     const dispatch = useDispatch();
     const Clearfoodcart = () => {
        dispatch(clearCart());
     }
    return (
        <div>
            
            <h1> Number of Items:  {cartItems.length}</h1>
            <button style={{background:"red",height:"30px",color:"white"}} onClick={() => Clearfoodcart()}>clear Cart</button>
            <div style={csscartStyle} >
            {cartItems.map((item)  => (
                <Foodcart  key={item.id} {...item}  />
            ))}
            </div>
            <button style={{background:"blue",height:"30px",color:"white"}}>PAY NOW</button>
             
        </div>
        

    )
}
export default Cart;