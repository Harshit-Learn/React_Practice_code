import React from 'react'
import {Route, Routes } from "react-router-dom";
import Home from "../Home/Home.jsx"
import Products from "../Products/Products"
import SingleProducts from "../Products/SingleProducts"
import Articles from "../Articles/Articles"
import Contact from "../Contact/Contact"
import Admin from "../Admin/Admin"
import Sales from "../Admin/Sales"
import Sellers from "../Admin/Sellers"
import NotFound from "../NotFound/NotFound"
import Linkto from "../Linkto/Linkto"

const AllRoutes = () => {
  return (
    <div>
       <Routes>
    /* ✅ Valid routes */
   <Route path= "/" element= {<Home />}/>
    <Route path= "/products" element= {<Products/>}/>
        <Route path= "/products/:id" element= {<SingleProducts/>}/>
     <Route path= "/articles" element= {<Articles />}/>
     
              /* Nested Routing */
      <Route path= "/admin" element= {<Admin/>}>
        <Route path= "Sales" element= {<Sales/>}/>
        <Route path= "Sellers" element= {<Sellers/>}/>
      </Route>

       <Route path= "/contact" element= {<Contact/>}/>
        <Route path= "/link" element= {<Linkto />}/>
         /* ❌ Invalid route */
       <Route path= "*" element= {<NotFound/>}/>
       
   </Routes>

    </div>
  )
}

export default AllRoutes
