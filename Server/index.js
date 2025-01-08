const express = require('express');
const dbConnect = require('../Server/Config/dbConnect')
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000
const cors = require('cors');
const routes = require('./Routes/routes')

dbConnect();
const app = express();
app.use(express.json())
app.use(cors());
app.use('/api/user/v1', routes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})