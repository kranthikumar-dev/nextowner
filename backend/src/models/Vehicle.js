import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    brand: String,
    model: String,
    year: Number,
    kmDriven: Number,
    fuelType: String,
    ownerType: String,
    price: Number,
    location: String,
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

export default mongoose.model("Vehicle", vehicleSchema);
