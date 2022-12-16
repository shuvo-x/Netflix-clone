const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose');
const userRoutes = require('./routes/UserRoute');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.g8klt2x.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("DB Connected");
});

app.use("/api/user/", userRoutes);

app.listen(5000, console.log("Server started"));