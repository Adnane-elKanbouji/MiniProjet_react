// // App.js
import "./App.css"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Navabar from "./Compenents/Navbar/Navabar";
import { Route,Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Footer/Footer";
import Login from "./login/Login";
import Panier from "./Pages/Panier/Panier";
import Inscription from "./login/Inscription";
import Confirmation from "./Pages/Ticket/Confirmation";
import Payment from "./Pages/Payment/Payment";
import LangContext from './Compenents/Lang/LangContext';

const App = () => {
  return (
  <div >
   <LangContext>
   <Navabar/>
   </LangContext>
   <br />
   <Routes>


    
          
<Route path="/"   element={<Home/>} />
<Route path="/Login"   element={<Login/>} />
<Route path="/signup"   element={<Inscription />} />
<Route path="/panier"   element={<Panier />} />
<Route path="/Confirmation"   element={<Confirmation />} />
<Route path="/payment"   element={<Payment/>} />
<Route path="/panier/*"   element={<><h1>panier 404</h1></>} />
<Route path="*"   element={<><h1> 404</h1></>} />

</Routes>
   <br />
          <Footer/>
    </div>
  );
};

export default App;
