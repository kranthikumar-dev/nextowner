import express from "express";

import protect from "../middleware/authMiddleware.js";

import {
  createProperty,
  getProperties,
} from "../controllers/propertyController.js";

const router = express.Router();

router.route("/").get(getProperties).post(protect, createProperty);

export default router;
