const express =  require('express');
const cors = require('cors');   
const morgan = require('morgan');
const env = require('dotenv').config();
const connectDB = require('./config/db.js');


const app = express();
app.use(cors());  
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
app.use(morgan("dev"));


// mongodb connection
connectDB();


// routes
app.get("/", (req, res) => {    
    res.status(200).send({message: "server running"}); 
});

const userRouter = require("./routes/user.route.js"); 
const adminRouter = require("./routes/admin.routes.js");
const movieRouter = require("./routes/movie.routes.js");
const bookingRouter = require("./routes/booking.routes.js");

app.use("/api/user", userRouter); 
app.use("/api/admin", adminRouter); 
app.use("/api/movie", movieRouter);
app.use("/api/booking", bookingRouter);




const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => { 
    console.log(`Server is running on http://localhost:${PORT}`);
})