import React, { useEffect, useState } from 'react'
// import ReactDOM from 'react-dom';
import './App.css'
import ship1 from "./assets/ship1.jpg"
import ship2 from "./assets/ship2.jpg"
import ship3 from "./assets/ship3.jpg"
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Register from './form/Register';
import {Route, Routes} from "react-router-dom";
import Products from './components/Product'
import Booking from './components/Booking'

function App() {

  const[products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://good-will-cargo-spark-production.up.railway.app/cargo_ships')
      .then((r) => r.json())
      .then((cargoShips) => {setProducts(()=>cargoShips)})

  }, [])
  return (
    <div className="App">
      
      <Navbar />
      <Routes>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/products' element={<Products products={products} />}/>
      <Route path='/' element= {
        <>
            <Hero imageSrc={ship1} />
              <Slider
                imageSrc={ship2}
                title={"Dependable Shipping."}
                subtitle={
                  "At Good Will Cargo, we offer tailored alternatives for the movement…"
                }
              />
              <Slider
                imageSrc={ship3}
                title={"Fast Shipping."}
                subtitle={"Good Will Cargo delivers fast, safe and sound sea cargo solutions.."}
                flipped={true}
               />
              </>
            }
          />
          <Route path="/booking/:id" element={<Booking/>}/>
      </Routes>
    </div>
  )
}

export default App
