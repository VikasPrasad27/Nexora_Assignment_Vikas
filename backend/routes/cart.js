import express from "express"
import Cart from "../models/Cart.js"
import Product from "../models/Product.js"

const router = express.Router()

// GET cart for user
router.get("/", async (req, res) => {
  try {
    const userId = req.query.userId || "guest-user"
    let cart = await Cart.findOne({ userId })

    if (!cart) {
      cart = new Cart({ userId, items: [] })
      await cart.save()
    }

    const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    res.json({
      items: cart.items,
      total: Number.parseFloat(total.toFixed(2)),
      itemCount: cart.items.length,
    })
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart", message: error.message })
  }
})

// POST add item to cart
router.post("/", async (req, res) => {
  try {
    const { productId, quantity } = req.body
    const userId = req.query.userId || "guest-user"

    if (!productId || !quantity || quantity < 1) {
      return res.status(400).json({ error: "Invalid product ID or quantity" })
    }

    const product = await Product.findOne({ id: productId })
    if (!product) {
      return res.status(404).json({ error: "Product not found" })
    }

    let cart = await Cart.findOne({ userId })
    if (!cart) {
      cart = new Cart({ userId, items: [] })
    }

    const existingItem = cart.items.find((item) => item.productId === productId)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      cart.items.push({
        productId,
        quantity,
        price: product.price,
        name: product.name,
      })
    }

    cart.updatedAt = new Date()
    await cart.save()

    const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    res.json({
      message: "Item added to cart",
      items: cart.items,
      total: Number.parseFloat(total.toFixed(2)),
    })
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart", message: error.message })
  }
})

// DELETE remove item from cart
router.delete("/:productId", async (req, res) => {
  try {
    const userId = req.query.userId || "guest-user"
    const { productId } = req.params

    const cart = await Cart.findOne({ userId })
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" })
    }

    cart.items = cart.items.filter((item) => item.productId !== productId)
    cart.updatedAt = new Date()
    await cart.save()

    const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    res.json({
      message: "Item removed from cart",
      items: cart.items,
      total: Number.parseFloat(total.toFixed(2)),
    })
  } catch (error) {
    res.status(500).json({ error: "Failed to remove item", message: error.message })
  }
})

// PUT update item quantity
router.put("/:productId", async (req, res) => {
  try {
    const userId = req.query.userId || "guest-user"
    const { productId } = req.params
    const { quantity } = req.body

    if (!quantity || quantity < 1) {
      return res.status(400).json({ error: "Invalid quantity" })
    }

    const cart = await Cart.findOne({ userId })
    if (!cart) {
      return res.status(404).json({ error: "Cart not found" })
    }

    const item = cart.items.find((item) => item.productId === productId)
    if (!item) {
      return res.status(404).json({ error: "Item not found in cart" })
    }

    item.quantity = quantity
    cart.updatedAt = new Date()
    await cart.save()

    const total = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)

    res.json({
      message: "Item quantity updated",
      items: cart.items,
      total: Number.parseFloat(total.toFixed(2)),
    })
  } catch (error) {
    res.status(500).json({ error: "Failed to update item", message: error.message })
  }
})

export default router
