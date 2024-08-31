import React from 'react';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import {  useSelector } from "react-redux";

const islogin = () => {
  return false;
}
const Logo = () => {
  return (
    <div>
      <a href='/'> 
      <img src='https://1000logos.net/wp-content/uploads/2021/06/Zomato-logo.png'  className='logo'/>
      </a>
      </div>
  )
}

const Header = () => {

  const [islogin,setlogin] = useState(true);

  const cartItems = useSelector(store => store.cart.items);
  console.log(cartItems);

    return (
    <div className="header">
      <Logo/>
      <div className="nav_items">
        <ul>
          <li><Link  to='/'>Home </Link></li>
          <li> <Link to='/contect'> Contect</Link></li>
          <li> <Link  to='/about'>About Us </Link></li>
          <li> <Link  to='/instamart'>Instamart </Link></li>
          <li> <Link to='/cart'>🛒  {cartItems.length} -items </Link></li>
        </ul>
      </div >
      
   
      {
        islogin ?  <button onClick={ () =>setlogin(false)}>login</button>
         : <button onClick={ () => setlogin(true)}>logout</button>
      }
    
      
    </div>
  );
    };
export default Header;