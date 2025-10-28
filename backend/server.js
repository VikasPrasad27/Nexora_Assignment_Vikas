import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import productRoutes from "./routes/products.js"
import cartRoutes from "./routes/cart.js"
import checkoutRoutes from "./routes/checkout.js"

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.MONGODB_URI )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error:", err))

// Routes
app.use("/api/products", productRoutes)
app.use("/api/cart", cartRoutes)
app.use("/api/checkout", checkoutRoutes)

app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
