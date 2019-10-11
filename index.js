const express =  require('express');
const app = express();
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

// connect to db
mongoose.connect('mongodb+srv://restAPI:trinhvanvinh018@restapi-4od1g.mongodb.net/test?retryWrites=true&w=majority',
{ useNewUrlParser: true },
()=>console.log('connected to db')
);

app.use(express.json());

app.use('/api', authRoute);


app.listen(3000 ,()=> console.log('Server up and running ...'));

