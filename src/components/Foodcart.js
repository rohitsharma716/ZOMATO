 import React  from "react";
 import { IMG_CDN_URL } from "../constant";
 
  const Foodcart = ({imageId , name,defaultPrice}) => {
    const foodcartStyle ={
        width: "200px",
        height:"300px",
        border:" 2px solid black",
        background:"green",
        margin:"20px",
        padding:"10px",
    };
    return (
   <>
   <div  style={foodcartStyle}>
    <img style={{height:"80px", width:"150px", margin:"20px"}} src={ IMG_CDN_URL  + imageId}/>
    <h3>{name}</h3>
    {/* <p>{description}</p> */}
    <h2> price:{defaultPrice/100}</h2>
  

    </div>
   </>
);
    };
export default Foodcart;
