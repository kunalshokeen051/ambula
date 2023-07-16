import React, { useState } from 'react';
import {AiFillCloseCircle} from 'react-icons/ai'

const ShoppingCart = ({closeCart, cartItems, setCartItems}) => {
  

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const handleItemDelete = (itemId) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  return (
    <div className="w-full flex justify-end min-h-[calc(100vh-80px)] bg-black bg-opacity-30 absolute">
<div className="bg-white w-[500px] absolute top-0 min-h-[calc(100vh-80px)]  mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 flex justify-between">Shopping Cart <AiFillCloseCircle className='hover:scale-125 hover:text-red-500' onClick={() =>{closeCart(false)}} /></h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between py-2 border-b"
        >
          <div className="flex-grow">
            <h2 className="font-bold">{item.name}</h2>
            <p className="text-gray-600">${item.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() =>
                handleQuantityChange(item.id, item.quantity - 1)
              }
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-1 px-2 rounded"
            >
              -
            </button>
            <span className="font-semibold">{item.quantity}</span>
            <button
              onClick={() =>
                handleQuantityChange(item.id, item.quantity + 1)
              }
              className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-1 px-2 rounded"
            >
              +
            </button>
            <button
              onClick={() => handleItemDelete(item.id)}
              className="text-red-500 hover:text-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="mt-4 text-xl font-bold">
        Total Price: ${getTotalPrice()}
      </div>
    </div>
    </div>
  );
};

export default ShoppingCart;
