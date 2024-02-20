const express=require('express');
const singlehotelHandler = require('../controllers/singleHotelController');
const router=express.Router();

router.route("/:id")
    .get(singlehotelHandler)

module.exports = singlehotelHandler;