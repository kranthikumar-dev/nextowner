import express from "express";
import upload from "../middleware/uploadMiddleware.js";

import {
  createListing,
  getListings,
  getSingleListing,
  deleteListing,
} from "../controllers/listingController.js";

const router = express.Router();

router.get("/", getListings);

router.get("/:id", getSingleListing);

router.post("/", upload.array("images", 10), createListing);

router.delete("/:id", deleteListing);

export default router;
