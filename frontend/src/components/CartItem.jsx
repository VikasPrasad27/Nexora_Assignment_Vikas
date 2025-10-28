
import React from "react"
import "./CartItem.css"

export default function CartItem({ item, onRemove, onUpdateQuantity }) {
  const itemTotal = (item.price * item.quantity).toFixed(2)

  return (
    <div className="cart-item text-black">
      <div className="item-name">
        <span>{item.name}</span>
      </div>
      <div className="item-price">
        <span>₨{item.price.toFixed(2)}</span>
      </div>
      <div className="item-quantity">
        <button
          className="qty-btn"
          onClick={() => onUpdateQuantity(item.productId, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          −
        </button>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => {
            const val = Number.parseInt(e.target.value) || 1
            if (val > 0) onUpdateQuantity(item.productId, val)
          }}
          className="qty-input"
        />
        <button className="qty-btn" onClick={() => onUpdateQuantity(item.productId, item.quantity + 1)}>
          +
        </button>
      </div>
      <div className="item-total">
        <span>₨{itemTotal}</span>
      </div>
      <button className="remove-btn" onClick={() => onRemove(item.productId)} title="Remove item">
        ✕
      </button>
    </div>
  )
}
