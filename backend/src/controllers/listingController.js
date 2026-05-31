import Listing from "../models/Listing.js";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

// =========================================
// CREATE LISTING
// =========================================

export const createListing = async (req, res) => {
  try {
    const imageUrls = [];

    console.log(req.files);

    // =========================================
    // IMAGE UPLOAD
    // =========================================

    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        try {
          const result = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
              {
                folder: "nextowner",
              },
              (error, result) => {
                if (error) reject(error);
                else resolve(result);
              },
            );

            streamifier.createReadStream(file.buffer).pipe(stream);
          });

          imageUrls.push(result.secure_url);
        } catch (uploadError) {
          console.log("IMAGE UPLOAD ERROR:");
          console.log(uploadError);
        }
      }
    }

    // =========================================
    // CREATE LISTING
    // =========================================

    const listing = await Listing.create({
      category: req.body.category,
      title: req.body.title,
      price: Number(req.body.price),
      location: req.body.location,
      contact: req.body.contact,
      whatsapp: req.body.whatsapp,
      description: req.body.description,
      images: imageUrls,
    });

    res.status(201).json(listing);
  } catch (error) {
    console.log("CREATE LISTING ERROR:");
    console.log(error);

    res.status(500).json({
      message: "Failed to create listing",
    });
  }
};

// =========================================
// GET ALL LISTINGS
// =========================================

export const getListings = async (req, res) => {
  try {
    const listings = await Listing.find().sort({
      createdAt: -1,
    });

    res.json(listings);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch listings",
    });
  }
};

// =========================================
// GET SINGLE LISTING
// =========================================

export const getSingleListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    res.json(listing);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to fetch listing",
    });
  }
};

// =========================================
// DELETE LISTING
// =========================================

export const deleteListing = async (req, res) => {
  try {
    const listing = await Listing.findById(req.params.id);

    if (!listing) {
      return res.status(404).json({
        message: "Listing not found",
      });
    }

    await listing.deleteOne();

    res.json({
      message: "Listing deleted",
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Delete failed",
    });
  }
};
