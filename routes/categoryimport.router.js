const express = require('express');

const Category = require("../model/category.model.js");
const categories = require("../data/categories.js");

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        try{
            // await Hotel.remove();
            const categoriesInDB = await Category.insertMany(categories.data);
            res.json(categoriesInDB)
        }catch(err){
            console.log(err);
            res.json({ message: "Could not add categories to DB"})
        }
    })

module.exports = router;