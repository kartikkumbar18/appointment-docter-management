import React from "react";
import Home from "./Components/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ApplyAppointment from "./Components/Pages/ApplyAppointment";
import ListAppointments from "./Components/Pages/ListAppointments";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route  path="/applyAppoinment" element={<ApplyAppointment/>}/>
      <Route path="/Appointments" element={<ListAppointments/>}/>
    </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
