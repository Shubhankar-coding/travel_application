const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id:{type:String, required:true},
    category: { type: String, required: true },
    
})

const Category = mongoose.model("category", categorySchema);

module.exports = Category;