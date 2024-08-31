import React from "react";
import RestaurantCard from "./Restrocart";
import { useEffect, useState } from "react"; 
import Shimmer from "./Shimmer"; 
import { swiggy_api_URL } from "../constant";
import { Link } from "react-router-dom";


function filterData(searchText, restaurants) {
  const resFilterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return resFilterData;
}
const handleKeyPress = (e) => {
  if (e.key === 'Enter' || e.keyCode === 13) {
    searchData(searchText, allRestaurants);
  }
};


const Body = () => {
  
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  
  useEffect(() => {
    getRestaurants();
  }, []);

  
  async function getRestaurants() {
    
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {

          
          let checkData = json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

          
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      
      const resData = await checkJsonData(json);

      
      setAllRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    }
  }

  
  const searchData = (searchText, restaurants) => {
    if (searchText !== "") {
      const filteredData = filterData(searchText, restaurants);
      setFilteredRestaurants(filteredData);
      setErrorMessage("");
      if (filteredData?.length === 0) {
        setErrorMessage("your restaurant not able at zomato");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  
  if (!allRestaurants) return null;

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="apna restaurant khojo...🤤"
          value={searchText}
          
          onKeyUp={handleKeyPress} 
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            
            searchData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          
          {filteredRestaurants.map((restaurant) => {
            return (
              <Link 
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
            </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;