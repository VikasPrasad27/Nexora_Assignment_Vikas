import React from "react"
import { useState } from "react"
import "./CheckoutForm.css"

export default function CheckoutForm({ total, itemCount, onSubmit, onCancel, loading, error }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [formError, setFormError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setFormError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name.trim()) {
      setFormError("Please enter your name")
      return
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setFormError("Please enter a valid email address")
      return
    }

    onSubmit(formData)
  }

  return (
    <main className="checkout-container">
      <div className="checkout-wrapper">
        <button className="back-button" onClick={onCancel}>
          ← Back to Cart
        </button>

        <div className="checkout-content">
          <div className="checkout-form-section">
            <h2>Checkout</h2>
            <form onSubmit={handleSubmit} className="checkout-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Raj Verma"
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="testing@example.com"
                  disabled={loading}
                />
              </div>

              {formError && <div className="form-error">{formError}</div>}
              {error && <div className="form-error">{error}</div>}

              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? "Processing..." : "Complete Purchase"}
              </button>
            </form>
          </div>

          <div className="checkout-summary">
            <div className="summary-card">
              <h3>Order Summary</h3>
              <div className="summary-items">
                <div className="summary-row">
                  <span>{itemCount} items</span>
                  <span>₨{total.toFixed(2)}</span>
                </div>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-total">
                <span>Total</span>
                <span>₨{(total * 1.08).toFixed(2)}</span>
              </div>
              <p className="summary-note">Including 8% tax and free shipping</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
