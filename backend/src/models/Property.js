import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
  {
    title: String,
    type: String,
    bhk: String,
    area: Number,
    location: String,
    price: Number,
    facing: String,
    description: String,
    images: [String],

    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Property", propertySchema);
