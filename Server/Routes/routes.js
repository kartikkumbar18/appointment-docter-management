const express = require('express')
const router = express.Router();

const { createAppointment, getAllAppointments, deleteUserAppointment, updateuserAppontment} = require('../Controller/userControll');


router.post('/createappointment', createAppointment);
router.get('/allAppointments', getAllAppointments);
router.delete('/deleteAppointment/:id', deleteUserAppointment);
router.put('/updateAppointment/:id', updateuserAppontment);

module.exports = router;