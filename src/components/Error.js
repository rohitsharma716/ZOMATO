import React from "react";
import { useRouteError } from "react-router-dom";

    
const Error = () => {
    const  err =useRouteError();
    console.log(err);
    return (
        

        <div>
            <h1>oops!</h1>
            <h2>सकलका Buम BUम आपने कुछ गलत दबया है 😊 !</h2>
           {/* <h3>Error  {err.status} :{err.statusText}</h3> */}
            <img  width="200" height="200px"  src="https://as2.ftcdn.net/v2/jpg/01/69/52/57/1000_F_169525749_K0zxSMCiq7tjJ3WNrrorSAimlpSzuVC5.jpg"></img>
        </div>
    )
}

export default Error;