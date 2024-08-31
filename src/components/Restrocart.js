 import React  from "react";
 import { IMG_CDN_URL } from "../constant";
 
  const Restrocard = ({cloudinaryImageId , name,areaName,sla,costForTwo,avgRatingString,cuisines }) => {
   
    return (
   <>
   <div className="card">
    <img src={ IMG_CDN_URL  + cloudinaryImageId}/>
    <h3>{name}</h3>
    <p > {cuisines.join(", ")}</p>
    <h3> {areaName} </h3>
    <span>
        <h4
          style={
            avgRatingString < 4
              ? { backgroundColor: "var(--light-red)" }
              : avgRatingString === "--"
                ? { backgroundColor: "white", color: "black" }
                : { color: "white" }
          }
        >
          <i className="fa-solid fa-star"></i>
          {avgRatingString} ⭐ 
        </h4>
        <h4>•</h4>
        <h4>{sla?.lastMileTravelString ?? '2.0 km'}</h4>
        <h4>•</h4>
        <h4>{costForTwo ?? '₹200 for two'}</h4>
      </span>

    </div>
   </>
);
    };
export default Restrocard;
