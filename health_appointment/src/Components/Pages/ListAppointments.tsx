import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Navbar from "../Navbar/navbar";
import { FaPencilAlt } from "react-icons/fa";
import Footer from "../Footer/Footer"

interface Appointment {
  appointmentDate: string;
  doctor: string;
  typeOfDesies:string;
  email: string;
  name: string;
  phone: string;
  _id: string;
}

function ListAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/user/v1/allAppointments"
        );
        setAppointments(response.data.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      try {
        await axios.delete(
          `http://localhost:5000/api/user/v1/deleteAppointment/${id}`
        );
        setAppointments((prev) =>
          prev.filter((appointment) => appointment._id !== id)
        );
      } catch (error) {
        console.error("Error deleting appointment:", error);
      }
    }
  };

  const handleUpdate = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (selectedAppointment) {
      try {
        await axios.put(
          `http://localhost:5000/api/user/v1/updateAppointment/${selectedAppointment._id}`,
          selectedAppointment
        );
        setAppointments((prev) =>
          prev.map((appointment) =>
            appointment._id === selectedAppointment._id
              ? selectedAppointment
              : appointment
          )
        );
        setIsModalOpen(false);
      } catch (error) {
        console.error("Error updating appointment:", error);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedAppointment) {
      setSelectedAppointment({
        ...selectedAppointment,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">List of Appointments</h1>
        <table className="min-w-full table-auto border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border text-left">Full Name</th>
              <th className="px-4 py-2 border text-left">Doctor Name</th>
              <th className="px-4 py-2 border text-left">Type of Disease</th>
              <th className="px-4 py-2 border text-left">Appointment Date</th>
              <th className="px-4 py-2 border text-left">Email Address</th>
              <th className="px-4 py-2 border text-left">Mobile Number</th>
              <th className="px-4 py-2 border text-left">Actions</th>
              <th className="px-4 py-2 border text-left">Edit</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <tr
                  key={appointment._id}
                  className="bg-white hover:bg-gray-50"
                >
                  <td className="px-4 py-2 border">{appointment.name}</td>
                  <td className="px-4 py-2 border">{appointment.doctor}</td>
                  <td className="px-4 py-2 border">{appointment.typeOfDesies}</td>
                  <td className="px-4 py-2 border">
                    {appointment.appointmentDate}
                  </td>
                  <td className="px-4 py-2 border">{appointment.email}</td>
                  <td className="px-4 py-2 border">{appointment.phone}</td>
                  <td className="px-4 py-2 border cursor-pointer">
                    <MdDelete
                      size={24}
                      color="red"
                      onClick={() => handleDelete(appointment._id)}
                    />
                  </td>
                  <td className="px-4 py-2 border cursor-pointer">
                    <FaPencilAlt
                      size={24}
                      color="blue"
                      onClick={() => handleUpdate(appointment)}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="px-4 py-2 border text-center">
                  No appointments available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
            <h2 className="text-xl font-bold mb-4">Edit Appointment</h2>
            {selectedAppointment && (
              <form>
                <label className="block mb-2">
                  Full Name:
                  <input
                    type="text"
                    name="name"
                    value={selectedAppointment.name}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Doctor Name:
                  <input
                    type="text"
                    name="doctor"
                    value={selectedAppointment.doctor}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Type of Disease:
                  <input
                    type="text"
                    name="typeOfDesies"
                    value={selectedAppointment.typeOfDesies}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Appointment Date:
                  <input
                    type="text"
                    name="appointmentDate"
                    value={selectedAppointment.appointmentDate}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={selectedAppointment.email}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                  />
                </label>
                <label className="block mb-2">
                  Phone:
                  <input
                    type="text"
                    name="phone"
                    value={selectedAppointment.phone}
                    onChange={handleChange}
                    className="border rounded p-2 w-full"
                  />
                </label>
                <div className="flex justify-end mt-4">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-4 py-2 bg-gray-300 text-black rounded"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
      <div className="pt-10 pb-6 fixed bottom-0 w-full bg-gray-800 text-white">
          <Footer />
        </div>
    </>
  );
}

export default ListAppointments;
