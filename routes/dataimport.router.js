const express = require('express');

const Hotel = require("../model/hotel.model.js");
const hotels = require("../data/hotels.js");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
            // await Hotel.remove();
            const hotelsInDB = await Hotel.insertMany(hotels.data);
            res.json(hotelsInDB)
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add data to DB"})
        }
    })

module.exports = router;