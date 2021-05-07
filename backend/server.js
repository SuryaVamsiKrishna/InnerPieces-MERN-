require("dotenv").config();
const express = require("express");
const userRouter = require('./routes/userRoutes');
const productRoutes = require("./routes/productRoutes");
const doctorlistRoutes = require("./routes/doctorlistRoutes");
const orderRouter = require("./routes/orderRouter");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use('/api/users', userRouter);
app.use("/api/products", productRoutes);
app.use('/api/orders', orderRouter);
app.use("/api/doctorlist", doctorlistRoutes);

//Paypal client ID from .env file. send back to front end
app.get('/api/config/paypal', (req, res) => {
    // console.log(process.env.PAYPAL_CLIENT_ID);
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
