const express= require('express');
const mongoose=require('mongoose'); 
const dotenv = require("dotenv")
dotenv.config();

const hotelDataAddedtoDBRouter=require("./routes/dataimport.router.js");
const categoryDataAddedtoDBRouter=require("./routes/categoryimport.router.js")
const singleHotelRouter= require("./routes/singlehotel.router.js")
const autRouter=require('./routes/auth.router.js')
const wistlistRouter=require('./routes/wishlist.router.js')

const hotelRouter=require("./routes/hotel.router.js")
const categoryRouter=require("./routes/category.router.js")
const connectDB=require("./config/dbconfig.js")
const app=express();

app.use(express.json());
connectDB();



const PORT=3500;

app.get("/",(req,res)=>{
    res.send("hello")
})
app.use('/api/hoteldata',hotelDataAddedtoDBRouter);
app.use('/api/hotels', hotelRouter);
app.use('/api/categorydata',categoryDataAddedtoDBRouter);
app.use('/api/category',categoryRouter)
app.use('/api/hotels',singleHotelRouter);
app.use('/api/auth',autRouter)
app.use('/api/wishlist',wistlistRouter)
mongoose.connection.once("open",()=>{
    console.log("connected to DB");
    app.listen(process.env.PORT|| PORT,()=>{
        console.log("server is running")
    })
})

 
