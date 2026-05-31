import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createVehicle,
  getVehicles,
} from "../controllers/vehicleController.js";

const router = express.Router();

router.route("/").get(getVehicles).post(protect, createVehicle);

export default router;
