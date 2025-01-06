import React from "react";
import Admin from "./components/Admin";
import Customers from "./components/Customers";
import Master from "./layout/Master";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopKeeper from "./components/ShopKeeper";

function App() {
  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Master/>}>
            {/* outlets */}
                <Route path='/' element={<Admin/>}/>
                <Route path='/' element={<Customers/>}/>
                <Route path='/' element={<ShopKeeper/>}/>

        </Route>
      </Routes>
   </BrowserRouter>
    </>
   
  );
}

export default App;
