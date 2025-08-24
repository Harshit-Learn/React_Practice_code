import React from 'react'
import { Link , Outlet } from "react-router-dom";

function Admin() {
  return (
    <div>
      <h2>Admin Panel</h2>
      <ul>
       
           <li><Link to="/admin/Sales">Sales</Link></li>
           <li><Link to="/admin/Sellers">Sellers</Link></li>
        
      </ul>
      <Outlet/>
    </div>
  )
}

export default Admin
