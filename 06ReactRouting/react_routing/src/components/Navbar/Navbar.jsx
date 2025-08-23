import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {

  // 1. Before Link , we were using <a> anchor tag but due to this whole page is reloading.
  //2.We can use Link also place of NavLink( it's only for color the Home , products etc) 
  return (
    <nav>
      <ul className="navbar_list">
        <li>
                     
          <NavLink to="/">Home</NavLink>  
        </li>

        <li>
          <NavLink to="/products">Products</NavLink>
        </li>

        <li>
          <NavLink to="/articles">Articles</NavLink>
        </li>

        <li>
          <NavLink to="/admin">Admin</NavLink>
          
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
         <li>
          <a href ="/link">Linkto</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
