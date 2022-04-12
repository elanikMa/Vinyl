import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllAbout from "./About/AllAbout";
import './App.css';
import PageContact from "./Contact/PageContact";
import FirstPageAll from "./Home/FirstPageAll";
import AllShop from "./Shop/AllShop";


function App() {

return <Router> 
<nav className="navAll navFon"> 
<Link className="heading" to="/"> TREASURE </Link>
<Link className="styleTextNav" to="./shop"> Shop </Link>
<Link className="styleTextNav" to="./about"> About usgit init</Link>
<Link className="styleTextNav" to='./contact'> Contact </Link>
</nav>

<Routes> 
  <Route path="/" element={<FirstPageAll />}/> 
  <Route path="/contact" element={<PageContact />}/> 
  <Route path="/about" element={<AllAbout />}/> 
  <Route path="/shop" element={<AllShop />}/> 
</Routes>

</Router>
}

export default App;
