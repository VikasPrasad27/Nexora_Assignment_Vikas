import express from "express"
import Cart from "../models/Cart.js"
import Order from "../models/Order.js"

const router = express.Router()

// POST checkout
router.post("/", async (req, res) => {
  try {
    const { customerName, customerEmail, cartItems } = req.body
    const userId = req.query.userId || "guest-user"

    if (!customerName || !customerEmail || !cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Missing required fields" })
    }

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    const order = new Order({
      orderId,
      customerName,
      customerEmail,
      items: cartItems,
      total: Number.parseFloat(total.toFixed(2)),
      timestamp: new Date(),
    })

    await order.save()

    // Clear cart after checkout
    await Cart.findOneAndUpdate({ userId }, { items: [] })

    res.json({
      success: true,
      receipt: {
        orderId,
        customerName,
        customerEmail,
        items: cartItems,
        total: Number.parseFloat(total.toFixed(2)),
        timestamp: new Date().toISOString(),
        message: "Order placed successfully! Thank you for your purchase.",
      },
    })
  } catch (error) {
    res.status(500).json({ error: "Checkout failed", message: error.message })
  }
})

export default router
