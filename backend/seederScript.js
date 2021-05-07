require("dotenv").config();

const doctorlistData = require("./data/doctorlist");
const productData = require("./data/products");
const userData = require("./data/users");
const connectDB = require("./config/db");
const Doctorlist = require("./models/Doctorlist");
const Product = require("./models/Product");
const User = require('./models/userModel');

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await User.deleteMany({});
    await Doctorlist.deleteMany({});

    await Product.insertMany(productData);
    await User.insertMany(userData);
    await Doctorlist.insertMany(doctorlistData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
