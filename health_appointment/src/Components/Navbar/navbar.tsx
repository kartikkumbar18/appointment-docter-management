import React from 'react';
import Logo from "../../assets/Logo/doctor-appointment-icon-6.jpg"
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
    const Navigate = useNavigate();

    const handleBack = () => {
        Navigate('/')
    }
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-gray-100 border-b border-gray-300">
      <div className="flex items-center">
        <img onClick={handleBack} src={Logo} alt="Logo" className="h-10" />
      </div>

      <div className="flex space-x-6">
        <a href="/" className="text-gray-700 font-semibold hover:text-blue-500">Home</a>
        <a href="/appointments" className="text-gray-700 font-semibold hover:text-blue-500">Appointments</a>
        <a href="/applyAppoinment" className="text-gray-700 font-semibold hover:text-blue-500">Apply</a>
      </div>

      <div className="flex space-x-4">
        <a href="#login" className="text-blue-600 font-semibold hover:underline">Login</a>
        <a href="#signup" className="text-blue-600 font-semibold hover:underline">Sign Up</a>
      </div>
    </nav>
  );
};

export default Navbar;
