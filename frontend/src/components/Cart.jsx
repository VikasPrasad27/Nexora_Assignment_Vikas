import React,{ useState } from "react"
import CartItem from "./CartItem"
import CheckoutForm from "./CheckoutForm"
import Receipt from "./Receipt"
import "./Cart.css"

export default function Cart({ items, total, onRemove, onUpdateQuantity, onCheckout, onContinueShopping }) {
  const [showCheckout, setShowCheckout] = useState(false)
  const [receipt, setReceipt] = useState(null)
  const [checkoutLoading, setCheckoutLoading] = useState(false)
  const [checkoutError, setCheckoutError] = useState(null)

  const handleCheckoutSubmit = async (customerInfo) => {
    try {
      setCheckoutLoading(true)
      setCheckoutError(null)
      const receiptData = await onCheckout(customerInfo)
      setReceipt(receiptData)
    } catch (err) {
      setCheckoutError(err.message || "Checkout failed. Please try again.")
    } finally {
      setCheckoutLoading(false)
    }
  }

  if (receipt) {
    return (
      <Receipt
        receipt={receipt}
        onContinueShopping={() => {
          setReceipt(null)
          onContinueShopping()
        }}
      />
    )
  }

  if (showCheckout) {
    return (
      <CheckoutForm
        total={total}
        itemCount={items.length}
        onSubmit={handleCheckoutSubmit}
        onCancel={() => setShowCheckout(false)}
        loading={checkoutLoading}
        error={checkoutError}
      />
    )
  }

  return (
    <main className="cart-container">
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button className="back-button" onClick={onContinueShopping}>
          ← Continue Shopping
        </button>
      </div>

      {items.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-icon">🛒</div>
          <h3>Your cart is empty</h3>
          <p>Start shopping to add items to your cart</p>
          <button className="shop-button" onClick={onContinueShopping}>
            Start Shopping
          </button>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            <div className="items-header">
              <span>Product</span>
              <span>Price</span>
              <span>Quantity</span>
              <span>Total</span>
              <span></span>
            </div>
            {items.map((item) => (
              <CartItem key={item.productId} item={item} onRemove={onRemove} onUpdateQuantity={onUpdateQuantity} />
            ))}
          </div>

          <div className="cart-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₨{total.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span className="free">Free</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>₨{(total * 0.08).toFixed(2)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total</span>
                <span>₨{(total * 1.08).toFixed(2)}</span>
              </div>
              <button className="checkout-button" onClick={() => setShowCheckout(true)}>
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
