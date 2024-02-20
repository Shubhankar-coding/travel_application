const express = require('express');
const router = express.Router();
// const Hotel=require( "../model/hotel.model")
// const hotels = require("../data/hotels.js");
const getAllHotelHandler=require("../controllers/hotelController")
router.route("/")
  .get(getAllHotelHandler);

module.exports = router;
