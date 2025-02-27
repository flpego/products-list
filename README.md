# 🛒 Product List with Cart - Frontend Mentor Challenge

This is my solution for the [Product List with Cart](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d) challenge from Frontend Mentor. It was built using **React**, with a focus on responsiveness and interactive functionality.

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

## 🚀 Demo

🔗 Live Site: [Live site URL here](https://products-list-with-react.netlify.app/)  
🔗 Solution on Frontend Mentor: [Solution](https://www.frontendmentor.io/challenges/product-list-with-cart-5MmqLVAp_d)

## 🎯 Features

✅ Add products to the cart  
✅ Remove products from the cart  
✅ Increase/decrease quantity of items  
✅ View an order confirmation modal  
✅ Reset cart selections  
✅ Fully responsive design  

## 🛠 Built with

- **React** - Component-based UI
- **Vite** - Fast development build
- **CSS Modules / Sass Css** - Scoped styling
- **Local JSON Data** - Simulating a backend response
- **Flexbox & Grid** - Modern layout techniques

## 📚 What I Learned

While working on this project, I improved my skills in:

- Managing component state in React
- Handling dynamic UI updates efficiently
- Improving accessibility with proper semantic HTML
- Enhancing user experience with animations and transitions

### Example Code:

```js
const addToCart = (product) => {
  setCart((prevCart) => [...prevCart, product]);
};
