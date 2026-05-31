import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    category: String,
    type: String,
    price: Number,
    location: String,
    images: [String],
    whatsapp: String,
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    approved: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Listing", listingSchema);
