import express from "express";

import protect from "../middleware/authMiddleware.js";

import adminMiddleware from "../middleware/adminMiddleware.js";

import {
  getAllListings,
  approveListing,
} from "../controllers/adminController.js";

const router = express.Router();

router.get("/listings", protect, adminMiddleware, getAllListings);

router.put("/approve/:id", protect, adminMiddleware, approveListing);

export default router;
