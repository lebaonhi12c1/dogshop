import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar/index';
import Home from './component/home/index.js';
import Dogs from './component/dogs/index.js';
import Cart from './component/cart/index.js';
import { useEffect, useState } from 'react';
function App() {
  const [dogs,setDogs]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/dogs')
      .then(response => response.json())
      .then(data => setDogs(data))
  },[])
  console.log(dogs)
  return (
      <Router>
        <Navbar></Navbar>
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/dogs" element={<Dogs dogs = {dogs}/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
        </div>
      </Router>
    )
}

export default App;
