// // Define the shopping cart object
// const shoppingCart = {
//     cartItems: [],
//     addToCart(item, quantity) {
//       const existingItem = this.cartItems.find((cartItem) => cartItem.item === item);
//       if (existingItem) {
//         existingItem.quantity += quantity;
//       } else {
//         this.cartItems.push({ item, quantity });
//       }
//     },
//     removeFromCart(item, quantity) {
//       const existingItem = this.cartItems.find((cartItem) => cartItem.item === item);
//       if (existingItem) {
//         existingItem.quantity -= quantity;
//         if (existingItem.quantity <= 0) {
//           // Remove the item if the quantity becomes zero or negative
//           const index = this.cartItems.indexOf(existingItem);
//           this.cartItems.splice(index, 1);
//         }
//       }
//     },
//     calculateTotal() {
//       let total = 0;
//       for (const cartItem of this.cartItems) {
//         total += cartItem.item.price * cartItem.quantity;
//       }
//       return total;
//     },
//   };
  
//   module.exports = shoppingCart;
  