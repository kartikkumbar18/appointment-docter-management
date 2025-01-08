import React, { ChangeEvent, useState } from "react";
import axios from "axios";
import { IoIosArrowRoundBack } from "react-icons/io";
import Navbar from "../Navbar/navbar";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
interface formData {
  name: string;
  email: string;
  phone: string;
  doctor: string;
  typeOfDesies: string,
  appointmentDate: string;
}

const ApplyAppointment: React.FC = () => {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    typeOfDesies: "",
    appointmentDate: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email || formData.email.trim() === "") {
      alert("Email is required");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/user/v1/createappointment",
        formData
      );
      console.log(response.data);
      alert("Appointment Booked Successfully");
      navigate("/Appointments");
    } catch (error) {
      console.error(error);
      alert("An error occurred while booking the appointment.");
    }
  };
  

    const handleBack = () => {
        navigate('/')
    }
  return (
    <>
    <div>
        <Navbar/>
    </div>
     <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mb-48">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Book an Appointment
        </h1>

        <div className="mb-4 flex items-center">
          <IoIosArrowRoundBack className="text-xl mr-2" />
          <button onClick={handleBack} className="text-blue-500 font-medium hover:underline">Back</button>
        </div>

        <form>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="doctor"
            >
              Select Doctor
            </label>
            <select
              id="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            >
              <option value="">Select Doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
              <option value="Dr. Lee">Dr. Lee</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="email"
            >
              Type of Disease
            </label>
            <input
              type="typeOfDesies"
              id="typeOfDesies"
              name="typeOfDesies"
              value={formData.typeOfDesies}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700"
              htmlFor="appointmentDate"
            >
              Appointment Date
            </label>
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded mt-2"
              required
            />
          </div>

          <button
            onClick={handleSubmit}
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded mt-4 hover:bg-blue-700"
          >
            Book Appointment
          </button>
        </form>
      </div>
    </div>
    <div className="pt-10 pb-6 fixed bottom-0 w-full bg-gray-800 text-white">
          <Footer />
        </div>
    </>
  );
};

export default ApplyAppointment;
