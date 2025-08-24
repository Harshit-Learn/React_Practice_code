import './App.css'
import AllRoutes from "./components/Routes/AllRoutes"
import Navbar from "./components/Navbar/Navbar.jsx"


function App() {
   
return (
  <div className="app">
  <main className="app_main">
     <Navbar/>
    <AllRoutes/>
   </main>
  </div>
  );
};

export default App
