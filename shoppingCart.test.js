// // shoppingCart.test.js
// const shoppingCart = require('./shoppingCart');

// test('addToCart should add item to the shopping cart', () => {
//   const item = { name: 'Item 1', price: 10 };
//   const quantity = 2;
//   shoppingCart.addToCart(item, quantity);
//   expect(shoppingCart.cartItems).toEqual([{ item, quantity }]);
// });

// test('removeFromCart should remove item from the shopping cart', () => {
//   const item = { name: 'Item 1', price: 10 };
//   const quantity = 1;
//   shoppingCart.removeFromCart(item, quantity);
//   expect(shoppingCart.cartItems).toEqual([]);
// });

// test('calculateTotal should calculate the total cost of items in the shopping cart', () => {
//   const item1 = { name: 'Item 1', price: 10 };
//   const quantity1 = 2;
//   const item2 = { name: 'Item 2', price: 20 };
//   const quantity2 = 3;
//   shoppingCart.addToCart(item1, quantity1);
//   shoppingCart.addToCart(item2, quantity2);
//   const total = shoppingCart.calculateTotal();
//   expect(total).toBe(90);
// });
