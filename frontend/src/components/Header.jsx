import React from "react"
import "./Header.css"

export default function Header({ cartCount, onCartClick, onLogoClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={onLogoClick}>
          <span className="logo-icon">⚡</span>
          <h1>Vibe Commerce</h1>
        </div>
        <button className="cart-button" onClick={onCartClick}>
          <span className="cart-icon">🛒</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </button>
      </div>
    </header>
  )
}
