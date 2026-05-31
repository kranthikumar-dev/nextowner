import Listing from "../models/Listing.js";

export const getAllListings = async (req, res) => {
  const listings = await Listing.find();

  res.json(listings);
};

export const approveListing = async (req, res) => {
  const listing = await Listing.findById(req.params.id);

  listing.approved = true;

  await listing.save();

  res.json({ message: "Listing approved" });
};
