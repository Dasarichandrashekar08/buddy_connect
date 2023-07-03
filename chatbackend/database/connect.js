const mongoose = require('mongoose');

const mongo_url = ''
mongoose.connect(mongo_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error',(error)=>console.log('connection error:',error));

db.once('open', function () {
    console.log('Connected to MongoDB');
});

db.on('reconnected', function () {
    console.log('MongoDB reconnected!');
});

db.on('disconnected', function () {
    console.log('MongoDB disconnected!');
    mongoose.connect(mongo_url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});
