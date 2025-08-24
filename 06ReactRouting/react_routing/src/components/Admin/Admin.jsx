import React from 'react'
import { Link , Outlet , Navigate} from "react-router-dom";

function Admin() {

// Mastering Programmatic Navigation: Using the Navigate Component and UseNavigate Hook
  const user = {role:"admin"};
  if(user.role !== 'admin'){
  return <Navigate to='/'/>;
  }

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
