import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import listingRoutes from "./routes/listingRoutes.js";

import vehicleRoutes from "./routes/vehicleRoutes.js";
import propertyRoutes from "./routes/propertyRoutes.js";
// import paymentRoutes from "./routes/paymentRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/listings", listingRoutes);

app.use("/api/vehicles", vehicleRoutes);

app.use("/api/properties", propertyRoutes);

// app.use("/api/payments", paymentRoutes);

app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("NextOwner API Running");
});

export default app;
