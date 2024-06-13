const mongoose = require("mongoose");


// mongoose.connect("", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log("Connected to MongoDB");
// })
// .catch((error) => {
//   console.error("MongoDB connection error:", error);
// });

const express = require("express")

const app=express()

app.use(express.static('public'))


app.get('/', (req, res) => {
    res.send('Welcome to HAPPYS....!!');
});





app.listen(5000,function(){
    console.log("server is running...")
});
