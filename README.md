# Vibe Commerce - Full Stack E-Commerce Cart Application (Vikas Prasad Submission)

A modern, responsive e-commerce shopping cart application built with React, Node.js/Express, and MongoDB. This project demonstrates full-stack JavaScript development with a clean separation of concerns between frontend and backend.

## 🎯 Features

- **Product Catalog**: Browse 8 premium tech products with detailed information, images, and categories
- **Shopping Cart**: Add/remove items, update quantities with real-time totals and persistent storage
- **Checkout Flow**: Customer information form with email validation and order processing
- **Order Confirmation**: Receipt modal with order details, order ID, timestamp, and itemized breakdown
- **Responsive Design**: Mobile-first design that works seamlessly on all devices (mobile, tablet, desktop)
- **Error Handling**: Comprehensive error messages, form validation, and API error responses
- **Database Persistence**: MongoDB integration for products, carts, and orders with data integrity

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Lightweight web framework for REST APIs
- **MongoDB** - NoSQL database for flexible data storage
- **Mongoose** - MongoDB ODM for schema validation and queries

### Frontend
- **React 18** - Modern UI library with hooks
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Custom styling with design system and responsive layouts

## 📁 Project Structure

```bash
vibe-commerce/
├── backend/
│   ├── models/
│   │   ├── Product.js          # Product schema and model
│   │   ├── Cart.js             # Cart schema with items and totals
│   │   └── Order.js            # Order schema for checkout records
│   ├── routes/
│   │   ├── products.js         # GET /api/products endpoints
│   │   ├── cart.js             # Cart CRUD operations
│   │   └── checkout.js         # POST /api/checkout endpoint
│   ├── server.js               # Express server setup and middleware
│   ├── package.json            # Backend dependencies
│   └── .env.example            # Environment variables template
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx       # Navigation and cart icon
    │   │   ├── ProductGrid.jsx  # Product listing container
    │   │   ├── ProductCard.jsx  # Individual product card
    │   │   ├── Cart.jsx         # Cart page with items list
    │   │   ├── CartItem.jsx     # Cart item with quantity controls
    │   │   ├── CheckoutForm.jsx # Checkout form with validation
    │   │   └── Receipt.jsx      # Order confirmation modal
    │   ├── App.jsx              # Main app component with routing
    │   ├── main.jsx             # React entry point
    │   └── App.css              # Global styles and design system
    ├── index.html               # HTML template
    ├── vite.config.js           # Vite configuration
    ├── package.json             # Frontend dependencies
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** v14 or higher (download from nodejs.org)
- **MongoDB** (local installation or MongoDB Atlas cloud)
- **npm** or **yarn** package manager
- **Git** for version control

### Backend Setup (5 minutes)

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
cp .env
```

4. **Configure MongoDB connection in `.env`:**
```
MONGODB_URI=YOUR_MONGODB_URI
PORT=5000
```


5. **Start the backend server:**
```bash
npm run dev
```

**Expected output:**
```
Server running on http://localhost:5000
MongoDB connected successfully
```

### Frontend Setup (5 minutes)

1. **Navigate to frontend directory (in a new terminal):**
```bash
cd frontend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create environment file:**
```bash
cp .env
```

4. **Start the development server:**
```bash
npm run dev
```

**Expected output:**
```
VITE v4.x.x  ready in xxx ms

➜  Local:   http://localhost:3000/
```

5. **Open in browser:**
Navigate to `http://localhost:3000` and start shopping!

## 📡 API Endpoints

### Products Endpoints
```
GET /api/products
- Returns: Array of all products
- Response: [{ id, name, price, description, category, image }, ...]

GET /api/products/:id
- Returns: Single product by ID
- Response: { id, name, price, description, category, image }
```

### Cart Endpoints
```
GET /api/cart
- Returns: Current user's cart with items and total
- Response: { items: [...], total: number, itemCount: number }

POST /api/cart
- Body: { productId: string, quantity: number }
- Returns: Updated cart
- Response: { items: [...], total: number, itemCount: number }

PUT /api/cart/:productId
- Body: { quantity: number }
- Returns: Updated cart with new quantity
- Response: { items: [...], total: number, itemCount: number }

DELETE /api/cart/:productId
- Returns: Updated cart after removal
- Response: { items: [...], total: number, itemCount: number }
```

### Checkout Endpoints
```
POST /api/checkout
- Body: { name: string, email: string, items: [...] }
- Returns: Order confirmation with receipt
- Response: { 
    orderId: string, 
    timestamp: date, 
    items: [...], 
    subtotal: number, 
    tax: number, 
    total: number 
  }
```


## 🔄 User Flow Diagram

```
1. Browse Products
   ↓
2. Add to Cart (multiple items)
   ↓
3. View Cart
   ├─ Update Quantities
   ├─ Remove Items
   └─ Review Total
   ↓
4. Proceed to Checkout
   ├─ Enter Name
   ├─ Enter Email
   └─ Review Order Summary
   ↓
5. Complete Purchase
   ↓
6. Order Confirmation
   ├─ View Receipt
   ├─ See Order ID
   └─ Continue Shopping
```

## 🧪 Testing Checklist

### Functionality Testing
- [ ] All 8 products load and display correctly
- [ ] Add product to cart updates cart badge
- [ ] Add same product twice increases quantity
- [ ] Cart page shows all items with correct prices
- [ ] Update quantity recalculates total
- [ ] Remove item removes from cart and updates total
- [ ] Checkout form validates email format
- [ ] Checkout form requires name and email
- [ ] Order confirmation displays correct information
- [ ] Continue Shopping button returns to products

### Responsive Testing
- [ ] Mobile (375px): Single column layout
- [ ] Tablet (768px): 2-3 column grid
- [ ] Desktop (1200px): 4 column grid
- [ ] All buttons are clickable on mobile
- [ ] Text is readable on all sizes
- [ ] Images scale properly

### Error Handling
- [ ] Invalid email shows error message
- [ ] Empty name field shows error
- [ ] Network error displays gracefully
- [ ] Backend down shows error message
- [ ] Invalid product ID handled


## 📝 Environment Variables

### Backend (.env)
```
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/vibe-commerce

# Server Configuration
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
# API Configuration
VITE_API_URL=http://localhost:5000/api
```

## 🎓 Learning Outcomes

This project demonstrates:
- **Full-stack JavaScript** development with Node.js and React
- **RESTful API** design and implementation
- **Database modeling** with MongoDB and Mongoose
- **React component** architecture and hooks
- **State management** with React hooks
- **Form validation** and error handling
- **Responsive web design** with CSS Grid and Flexbox
- **CORS** and API integration
- **Async/await** and Promise handling
- **Git** version control and GitHub workflow

