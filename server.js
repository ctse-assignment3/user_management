const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const userAPI = require('./src/api/user.api');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 8030;
const MONGODB_URI = process.env.MONGODB_URI;

//db conecvtion create
mongoose.connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}, (error) => {
    if(error){
        console.log('Database Error: ', error.message);
    }
});

//open connection with mongodb which created before
mongoose.connection.once('open', () => {
    console.log('Database synced');
});


// app.use('/expenses',expenseAPI());
app.use('/users',userAPI());


//start app
app.listen(PORT, () => {
    console.log(`Server is up and runing on PORT ${PORT}`);
});

