import React from "react"
import "./Receipt.css"

export default function Receipt({ receipt, onContinueShopping }) {
  const formattedDate = new Date(receipt.timestamp).toLocaleString()

  return (
    <main className="receipt-container">
      <div className="receipt-modal">
        <div className="receipt-header">
          <div className="success-icon">✓</div>
          <h2>Order Confirmed!</h2>
          <p className="receipt-message">{receipt.message}</p>
        </div>

        <div className="receipt-content">
          <div className="receipt-section">
            <h3>Order Details</h3>
            <div className="receipt-row">
              <span>Order ID:</span>
              <span className="receipt-value">{receipt.orderId}</span>
            </div>
            <div className="receipt-row">
              <span>Date & Time:</span>
              <span className="receipt-value">{formattedDate}</span>
            </div>
          </div>

          <div className="receipt-section">
            <h3>Customer Information</h3>
            <div className="receipt-row">
              <span>Name:</span>
              <span className="receipt-value">{receipt.customerName}</span>
            </div>
            <div className="receipt-row">
              <span>Email:</span>
              <span className="receipt-value">{receipt.customerEmail}</span>
            </div>
          </div>

          <div className="receipt-section">
            <h3>Items Ordered</h3>
            <div className="receipt-items">
              {receipt.items.map((item) => (
                <div key={item.productId} className="receipt-item">
                  <div className="item-details">
                    <span className="item-name">{item.name}</span>
                    <span className="item-qty">Qty: {item.quantity}</span>
                  </div>
                  <span className="item-price">₨{(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="receipt-section">
            <div className="receipt-total">
              <span>Subtotal:</span>
              <span>₨{receipt.total.toFixed(2)}</span>
            </div>
            <div className="receipt-total">
              <span>Tax (8%):</span>
              <span>₨{(receipt.total * 0.08).toFixed(2)}</span>
            </div>
            <div className="receipt-total receipt-grand-total">
              <span>Total:</span>
              <span>₨{(receipt.total * 1.08).toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="receipt-footer">
          <p className="receipt-note">A confirmation email has been sent to {receipt.customerEmail}</p>
          <button className="continue-button" onClick={onContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </main>
  )
}
