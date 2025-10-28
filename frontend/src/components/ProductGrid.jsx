import React from "react"
import ProductCard from "./ProductCard"
import "./ProductGrid.css"

export default function ProductGrid({ products, loading, onAddToCart }) {
  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    )
  }

  return (
    <main className="product-grid-container">
      <div className="grid-header">
        <h2>Shop Our Collection</h2>
        <p className="grid-subtitle">Discover premium tech accessories</p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </main>
  )
}
