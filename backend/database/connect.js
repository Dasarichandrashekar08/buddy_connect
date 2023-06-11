// const mongoose = require('mongoose');

// const mongo_url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.iolasks.mongodb.net/buddyconnect?retryWrites=true&w=majority`;
// mongoose.connect(mongo_url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error',(error)=>console.log('connection error:',error));

// db.once('open', function () {
//     console.log('Connected to MongoDB');
// });

// db.on('reconnected', function () {
//     console.log('MongoDB reconnected!');
// });

// // db.on('disconnected', function (error) {
// //     console.log(error);
// //     mongoose.connect(mongo_url,{
// //         useNewUrlParser: true,
// //         useUnifiedTopology: true
// //     });
// // });
// db.on('disconnected', function () {
//     console.log("MongoDB disconnected!");
//     mongoose.connect(mongo_url, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//     }, function(error) {
//         if (error) {
//             console.error("Failed to reconnect to MongoDB:", error);
//         } else {
//             console.log("Reconnected to MongoDB");
//         }
//     });
// });



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Chandrashekard:Chandu@123@cluster0.iolasks.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
