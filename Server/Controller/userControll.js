const User = require('../Model/AppoinmtentModel');

const createAppointment = async (req, res) => {
    try{
        console.log(req.body);
        const { name, email, phone, doctor, appointmentDate } = req.body;

        if(!name || !email || !phone || !doctor || !appointmentDate){
            return res.status(400).json({ message: 'All fields are required' });
        }

        const newAppointment = new User({
            name,
            email,
            phone,
            doctor,
            appointmentDate,
        });

        await newAppointment.save();
        res.status(201).json({ message: 'Appointment created successfully' , data:newAppointment});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error',error :  error.message });
    }
    
}

// const getAppointmentDetailes = async (req, res) => {
//     try{
//         const appointment = await User.findById(req.params.id);
//         if(!appointment){
//             return res.status(404).json({ message: 'Appointment not found' });
//         }
//         res.status(200).json({ message: 'Appointment details', data: appointment });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Server error', error :  error.message });
//     }

// }

const getAllAppointments = async (req, res) => {
    try{
        const appointments = await User.find();
        res.status(200).json({ message: 'All appointments', data: appointments });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error :  error.message });
    }
}

const deleteUserAppointment = async(req, res) => {
    try{
        const appointment = await User.findByIdAndDelete(req.params.id);
        if(!appointment){
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error :  error.message });
    }
}

const updateuserAppontment = async (req,res) => {
    try{
        const appointment = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if(!appointment){
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment updated successfully', data: appointment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error :  error.message });
    }
 
}

module.exports = { createAppointment, getAllAppointments, deleteUserAppointment , updateuserAppontment}