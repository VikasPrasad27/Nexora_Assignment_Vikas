import express from "express"
import Product from "../models/Product.js"

const router = express.Router()

// Mock products data
const mockProducts = [
  {
    id: "prod-001",
    name: "Wireless Headphones",
    price: 479,
    description: "Premium noise-cancelling headphones",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: "prod-002",
    name: "Smart Watch",
    price: 1199,
    description: "Advanced fitness tracking smartwatch",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
  },
  {
    id: "prod-003",
    name: "USB-C Cable",
    price: 112,
    description: "Durable 2-meter USB-C charging cable",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&h=400&fit=crop",
  },
  {
    id: "prod-004",
    name: "Portable Speaker",
    price: 499,
    description: "Waterproof Bluetooth speaker with 12-hour battery",
    category: "Electronics",
    image: "https://www.bing.com/images/search?view=detailV2&ccid=gmtKjLnB&id=B7C95D71D4B3080DC64F8C782999323A45643ED2&thid=OIP.gmtKjLnBv3SYaVavxlYdZgHaEK&mediaurl=https%3a%2f%2fcdn.pixabay.com%2fphoto%2f2020%2f12%2f03%2f10%2f33%2fspeaker-5800162_1280.jpg&exph=720&expw=1280&q=speaker+jpg&FORM=IRPRST&ck=CAB959C5DB599CE4ED73C4BA105A804E&selectedIndex=54&itb=0",
  },
  {
    id: "prod-005",
    name: "Phone Stand",
    price: 159,
    description: "Adjustable aluminum phone stand",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400&h=400&fit=crop",
  },
  {
    id: "prod-006",
    name: "Screen Protector",
    price: 289,
    description: "Tempered glass screen protector pack of 3",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=400&h=400&fit=crop",
  },
  {
    id: "prod-007",
    name: "Wireless Charger",
    price: 349,
    description: "Fast wireless charging pad for all devices",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1591290619762-8b6b3f0b0e5e?w=400&h=400&fit=crop",
  },
  {
    id: "prod-008",
    name: "Phone Case",
    price: 199,
    description: "Protective silicone phone case",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1592286927505-1def25115558?w=400&h=400&fit=crop",
  },
]

// GET all products
router.get("/", async (req, res) => {
  try {
    let products = await Product.find()

    if (products.length === 0) {
      await Product.insertMany(mockProducts)
      products = mockProducts
    }

    res.json(products)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products", message: error.message })
  }
})

// GET single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findOne({ id: req.params.id })
    if (!product) {
      return res.status(404).json({ error: "Product not found" })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product", message: error.message })
  }
})

export default router
