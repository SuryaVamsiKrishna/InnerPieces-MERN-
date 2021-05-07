const mongoose = require("mongoose");

const doctorlistSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Doctorlist = mongoose.model("doctorlist", doctorlistSchema);

module.exports = Doctorlist;