# Vibe Commerce - Full Stack E-Commerce Cart Application

A modern, responsive e-commerce shopping cart application built with React, Node.js/Express, and MongoDB.

## 🎯 Features

- **Product Catalog**: Browse 8 premium tech products with detailed information
- **Shopping Cart**: Add/remove items, update quantities with real-time totals
- **Checkout Flow**: Customer information form with validation
- **Order Confirmation**: Receipt modal with order details and confirmation
- **Responsive Design**: Mobile-first design that works on all devices
- **Error Handling**: Comprehensive error messages and validation
- **Database Persistence**: MongoDB integration for products, carts, and orders

## 🛠️ Tech Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **CSS3** - Styling with custom design system

## 📁 Project Structure

\`\`\`
vibe-commerce/
├── backend/
│   ├── models/
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── products.js
│   │   ├── cart.js
│   │   └── checkout.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.jsx
    │   │   ├── ProductGrid.jsx
    │   │   ├── ProductCard.jsx
    │   │   ├── Cart.jsx
    │   │   ├── CartItem.jsx
    │   │   ├── CheckoutForm.jsx
    │   │   └── Receipt.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── App.css
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── .env.example
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
\`\`\`bash
cd backend
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create `.env` file:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Update `.env` with your MongoDB URI:
\`\`\`
MONGODB_URI=mongodb://localhost:27017/vibe-commerce
PORT=5000
NODE_ENV=development
\`\`\`

5. Start the server:
\`\`\`bash
npm run dev
\`\`\`

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
\`\`\`bash
cd frontend
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create `.env` file:
\`\`\`bash
cp .env.example .env
\`\`\`

4. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

The frontend will run on `http://localhost:3000`

## 📡 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product

### Cart
- `GET /api/cart` - Get user's cart
- `POST /api/cart` - Add item to cart
- `PUT /api/cart/:productId` - Update item quantity
- `DELETE /api/cart/:productId` - Remove item from cart

### Checkout
- `POST /api/checkout` - Process checkout and create order

## 🎨 Design Features

- **Color Scheme**: Professional blue primary with clean neutrals
- **Typography**: System fonts for optimal performance
- **Responsive Grid**: Auto-adjusting product grid (1-4 columns)
- **Interactive Elements**: Hover effects and smooth transitions
- **Accessibility**: Semantic HTML and ARIA labels

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🔄 User Flow

1. **Browse Products** - View product grid with images and prices
2. **Add to Cart** - Click "Add to Cart" button on any product
3. **View Cart** - Click cart icon to see items and totals
4. **Update Quantities** - Adjust item quantities or remove items
5. **Checkout** - Enter name and email, review order summary
6. **Confirmation** - Receive order confirmation with receipt

## 🧪 Testing

### Manual Testing Checklist
- [ ] Add multiple products to cart
- [ ] Update product quantities
- [ ] Remove items from cart
- [ ] Verify cart totals calculate correctly
- [ ] Complete checkout with valid email
- [ ] Verify receipt displays correct information
- [ ] Test responsive design on mobile devices
- [ ] Test error handling with invalid inputs

## 🚀 Deployment

### Backend (Heroku/Railway)
1. Push code to GitHub
2. Connect repository to hosting platform
3. Set environment variables
4. Deploy

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy `dist` folder to hosting platform
3. Set `VITE_API_URL` environment variable to backend URL

## 📝 Environment Variables

### Backend (.env)
\`\`\`
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
\`\`\`

### Frontend (.env)
\`\`\`
VITE_API_URL=http://localhost:5000/api
\`\`\`

## 🎓 Learning Outcomes

This project demonstrates:
- Full-stack JavaScript development
- RESTful API design
- Database modeling and queries
- React component architecture
- State management
- Form validation
- Error handling
- Responsive web design
- CORS and API integration

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements.

## 📞 Support

For issues or questions, please open an issue on GitHub.
