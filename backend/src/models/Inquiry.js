import mongoose from "mongoose";

const inquirySchema = new mongoose.Schema(
  {
    listing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Listing",
    },

    buyerName: String,

    phone: String,

    message: String,
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Inquiry", inquirySchema);
