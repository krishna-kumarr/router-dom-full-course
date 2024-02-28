import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Vans from '../Pages/Vans'

const VanRouter = () => {
  return ( 
    <BrowserRouter>
        <header style={{padding:"10px",display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",backgroundColor:"black"}}>
            <Link to={'/'} style={{width:"25%",color:"white",textDecoration:"none"}}>#VANLIFE</Link>
            <nav style={{width:"25%",color:"white",textDecoration:"none",display:'flex',flexWrap:"wrap",justifyContent:'space-around'}}>
                <Link to={"/about"} style={{color:"white",textDecoration:"none"}}>About</Link>
                <Link to={"/vans"} style={{color:"white",textDecoration:"none"}}>Vans</Link>
            </nav>
        </header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/vans" element={<Vans/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default VanRouter