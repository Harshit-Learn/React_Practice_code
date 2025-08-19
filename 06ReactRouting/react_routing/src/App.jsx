import './App.css'
import {Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx"
import Products from "./components/Products/Products"
import Articles from "./components/Articles/Articles"
import Admin from "./components/Admin/Admin"
import Contact from "./components/Contact/Contact"
import Navbar from "./components/Navbar/Navbar.jsx"


function App() {
   
return (
  <div className="app">
  <Navbar/>

   <main className="app_main">
   <Routes>
   <Route path= "/" element= {<Home />}/>
    <Route path= "/products" element= {<Products/>}/>
     <Route path= "/articles" element= {<Articles />}/>
      <Route path= "/admin" element= {<Admin/>}/>
       <Route path= "/contact" element= {<Contact/>}/>
   </Routes>

   </main>
  </div>
  );
};

export default App
