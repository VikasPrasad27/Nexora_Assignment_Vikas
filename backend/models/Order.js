import mongoose from "mongoose"

const orderSchema = new mongoose.Schema({
  orderId: { type: String, unique: true, required: true },
  customerName: { type: String, required: true },
  customerEmail: { type: String, required: true },
  items: [
    {
      productId: { type: String, required: true },
      name: { type: String, required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  status: { type: String, default: "completed" },
})

export default mongoose.model("Order", orderSchema)
