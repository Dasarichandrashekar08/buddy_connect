const mongoose = require('mongoose');

const mongo_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iolasks.mongodb.net/buddyconnect?retryWrites=true&w=majority`;
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

// db.on('disconnected', function (error) {
//     console.log(error);
//     mongoose.connect(mongo_url,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     });
// });
db.on('disconnected', function () {
    console.log("MongoDB disconnected!");
    mongoose.connect(mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, function(error) {
        if (error) {
            console.error("Failed to reconnect to MongoDB:", error);
        } else {
            console.log("Reconnected to MongoDB");
        }
    });
});
