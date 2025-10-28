import React from "react"
import "./ProductCard.css"

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card ">
      <div className="product-image-wrapper">
        <img
          src={product.image || "https://www.bing.com/images/search?view=detailV2&ccid=gmtKjLnB&id=B7C95D71D4B3080DC64F8C782999323A45643ED2&thid=OIP.gmtKjLnBv3SYaVavxlYdZgHaEK&mediaurl=https%3a%2f%2fcdn.pixabay.com%2fphoto%2f2020%2f12%2f03%2f10%2f33%2fspeaker-5800162_1280.jpg&exph=720&expw=1280&q=speaker+jpg&FORM=IRPRST&ck=CAB959C5DB599CE4ED73C4BA105A804E&selectedIndex=54&itb=0"}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/300x300?text=Product"
          }}
        />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">₨{product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
