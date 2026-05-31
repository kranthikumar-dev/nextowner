import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    amount: Number,

    paymentId: String,

    orderId: String,

    status: {
      type: String,
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Payment", paymentSchema);
