// do not change code order -

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db/index");
const app = express();

const paymentRoutes = require("./Routes/SecureRoutes/paymentRoute");
const orderRoutes = require("./Routes/SecureRoutes/orderRouter");
const userRoutes = require("./Routes/SecureRoutes/userRouter");

const menuRoutes = require("./Routes/PublicRoutes/menuRouter");
const zoneRoutes = require("./Routes/PublicRoutes/zoneRouter");
const productRoutes = require("./Routes/PublicRoutes/productRouter");
const categoryRoutes = require("./Routes/PublicRoutes/categoryRouter");
const pcRoutes = require("./Routes/PublicRoutes/pcRouter");
const billingRouter = require("./Routes/PublicRoutes/billingRouter");

const merchantRoutes = require("./Routes/SecureRoutes/merchantRouter");
const geoRoutes = require("./Routes/SecureRoutes/geoRouter");

var corsOptions = {
  origin: [
    "http://localhost:3000",
    "http://localhost:3009",
    "https://rzp.io/l/jrGcpEG"
  ]
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.once("open", function () {
  console.log("Database connection Successful!");
});

db.on("error", console.error.bind(console, "connection error:"));

app.get("/", (req, res) => {
  res.json({ message: "welcome to food ordering app!" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

// public routes

app.use("/api/menu", menuRoutes); // working now

app.use("/api/zone", zoneRoutes); // working now

app.use("/api/product", productRoutes);

app.use("/api/category", categoryRoutes);

app.use("/api/profitcenter", pcRoutes);

app.use("/api/billing", billingRouter);

// secure routes

app.use("/api/payment", paymentRoutes);

app.use("/api/user", userRoutes);

app.use("/api/order", orderRoutes);

app.use("/api/controls/merchant", merchantRoutes);

app.use("/api/geo", geoRoutes);

// old keys
//RAZORPAY_API_KEY='rzp_test_z4K10X5imnV1Cy'
//RAZORPAY_API_SECRET='EdW9HNuyeU0SB5qBYk8x0Nle'