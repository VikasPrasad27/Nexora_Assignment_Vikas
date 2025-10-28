import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: String },
  image: { type: String },
  stock: { type: Number, default: 100 },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.model("Product", productSchema)
