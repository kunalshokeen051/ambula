import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';

const ProductGrid = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      image: '/p1.jpeg',
      mrp: 100,
      discount: 20,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Product 2',
      image: '/p2.jpeg',
      mrp: 210,
      discount: 30,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 3,
      name: 'Product 3',
      image: '/p3.jpeg',
      mrp: 200,
      discount: 30,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 4,
      name: 'Product 1',
      image: '/p1.jpeg',
      mrp: 100,
      discount: 20,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 5,
      name: 'Product 2',
      image: '/p2.jpeg',
      mrp: 210,
      discount: 30,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 6,
      name: 'Product 3',
      image: '/p3.jpeg',
      mrp: 200,
      discount: 30,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 7,
      name: 'Product 1',
      image: '/p1.jpeg',
      mrp: 100,
      discount: 20,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 8,
      name: 'Product 2',
      image: '/p2.jpeg',
      mrp: 210,
      discount: 30,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 9,
      name: 'Product 3',
      image: '/p3.jpeg',
      mrp: 200,
      discount: 30,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 10,
      name: 'Product 3',
      image: '/p3.jpeg',
      mrp: 200,
      discount: 30,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const openProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      );
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }

    closeProductDetails();
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  const calculateEffectivePrice = (mrp, discount) => {
    return mrp - discount;
  };

  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * (item.mrp - item.discount), 0);
  };

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-gray-100 rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h3 className="text-lg font-medium">{product.name}</h3>
            <p className="text-gray-500">
              MRP: <del>${product.mrp}</del>
            </p>
            <p className="text-gray-500">Discount: ${product.discount}</p>
            <p className="text-green-500 font-medium">
              Effective Price: ${calculateEffectivePrice(product.mrp, product.discount)}
            </p>
            <button
              onClick={() => openProductDetails(product)}
              className="mt-4 button bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      <Dialog open={selectedProduct !== null} onClose={closeProductDetails} className="fixed inset-0 z-10 flex items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
        {selectedProduct && (
          <div className="fixed bg-white rounded-lg shadow-lg p-6 z-20 max-w-xl">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-60 object-cover mb-4" />
            <h2 className="text-2xl mb-2">{selectedProduct.name}</h2>
            <p className="text-gray-500">
              MRP: <del>${selectedProduct.mrp}</del>
            </p>
            <p className="text-gray-500">Discount: ${selectedProduct.discount}</p>
            <p className="text-green-500 font-medium">
              Effective Price: ${calculateEffectivePrice(selectedProduct.mrp, selectedProduct.discount)}
            </p>
            <p className="mt-4">{selectedProduct.description}</p>
            <button
              onClick={() => addToCart(selectedProduct)}
              className="mt-4 button bg-blue-500 text-white px-4 py-2 rounded-lg focus:outline-none"
            >
              Add to Cart
            </button>
          </div>
        )}
      </Dialog>

      {showCart && (
        <Dialog open={showCart} onClose={closeCart} className="fixed inset-y-0 right-0 flex flex-col max-w-sm bg-white rounded-lg shadow-lg p-6 z-20">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl">Shopping Cart</h2>
            <button onClick={closeCart} className="button ml-4 bg-red-500 text-white px-2 py-1 rounded-lg focus:outline-none">
              Close
            </button>
          </div>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2">
                <img src={item.image} alt={item.name} className="w-8 h-8 object-cover" />
                <p>{item.name}</p>
              </div>
              <div className="flex items-center">
                <p className="text-gray-500">
                  <del>${item.mrp}</del>
                </p>
                <p className="text-green-500 font-medium ml-2">
                  ${calculateEffectivePrice(item.mrp, item.discount)}
                </p>
                <p className="text-gray-500 ml-2">x {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="border-t mt-4 pt-4">
            <p className="font-medium">Subtotal: ${calculateSubTotal()}</p>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default ProductGrid;
