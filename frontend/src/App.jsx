import React,{ useState, useEffect } from "react"
import Header from "./components/Header"
import ProductGrid from "./components/ProductGrid"
import Cart from "./components/Cart"
import "./App.css"

function App() {
  const [currentPage, setCurrentPage] = useState("shop")
  const [cartItems, setCartItems] = useState([])
  const [cartTotal, setCartTotal] = useState(0)
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api"

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const response = await fetch(`${API_URL}/products`)
      if (!response.ok) throw new Error("Failed to fetch products")
      const data = await response.json()
      setProducts(data)
      setError(null)
    } catch (err) {
      setError(err.message)
      console.error("Error fetching products:", err)
    } finally {
      setLoading(false)
    }
  }

  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_URL}/cart`)
      if (!response.ok) throw new Error("Failed to fetch cart")
      const data = await response.json()
      setCartItems(data.items)
      setCartTotal(data.total)
    } catch (err) {
      console.error("Error fetching cart:", err)
    }
  }

  const handleAddToCart = async (product) => {
    try {
      const response = await fetch(`${API_URL}/cart`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: product.id,
          quantity: 1,
        }),
      })
      if (!response.ok) throw new Error("Failed to add item")
      const data = await response.json()
      setCartItems(data.items)
      setCartTotal(data.total)
    } catch (err) {
      console.error("Error adding to cart:", err)
      setError("Failed to add item to cart")
    }
  }

  const handleRemoveFromCart = async (productId) => {
    try {
      const response = await fetch(`${API_URL}/cart/${productId}`, {
        method: "DELETE",
      })
      if (!response.ok) throw new Error("Failed to remove item")
      const data = await response.json()
      setCartItems(data.items)
      setCartTotal(data.total)
    } catch (err) {
      console.error("Error removing from cart:", err)
      setError("Failed to remove item from cart")
    }
  }

  const handleUpdateQuantity = async (productId, quantity) => {
    try {
      const response = await fetch(`${API_URL}/cart/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
      })
      if (!response.ok) throw new Error("Failed to update quantity")
      const data = await response.json()
      setCartItems(data.items)
      setCartTotal(data.total)
    } catch (err) {
      console.error("Error updating quantity:", err)
      setError("Failed to update quantity")
    }
  }

  const handleCheckout = async (customerInfo) => {
    try {
      const response = await fetch(`${API_URL}/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerInfo.name,
          customerEmail: customerInfo.email,
          cartItems,
        }),
      })
      if (!response.ok) throw new Error("Checkout failed")
      const data = await response.json()
      setCartItems([])
      setCartTotal(0)
      return data.receipt
    } catch (err) {
      console.error("Error during checkout:", err)
      throw err
    }
  }

  return (
    <div className="app">
      <Header
        cartCount={cartItems.length}
        onCartClick={() => setCurrentPage("cart")}
        onLogoClick={() => setCurrentPage("shop")}
      />

      {error && <div className="error-banner">{error}</div>}

      {currentPage === "shop" ? (
        <ProductGrid products={products} loading={loading} onAddToCart={handleAddToCart} />
      ) : (
        <Cart
          items={cartItems}
          total={cartTotal}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={handleCheckout}
          onContinueShopping={() => setCurrentPage("shop")}
        />
      )}
    </div>
  )
}

export default App
