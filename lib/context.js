import React, { createContext, useContext, useState } from "react";

//init Context
const ShopContext = createContext();

export const StateContext = ({ children }) => {
  //Add our data for the state
  const [qty, setQty] = useState(1);
  //show cart
  const [showCart, setShowCart] = useState(false);
  //here get all info of current product went 'Add to Cart' will hitten
  const [cartItems, setCartItems] = useState([]);
  //Add total quantities to cart in onAdd() and onRemove()
  const [totalQuantities, setTotalQuantities] = useState(0);
  //Add total price in cart and add set in onAdd() + onRemove()
  const [totalPrice, setTotalPrice] = useState(0);

  //Increase product quatity
  const increaseQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  //Decrease product quatity
  const decreaseQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  //Add product to carte
  const onAdd = (product, quantity) => {
    //increase Total Price
    setTotalPrice((prevTotal) => prevTotal + product.price * quantity);

    //increase total quantity
    setTotalQuantities((prevTotal) => prevTotal + quantity);
    //Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? {
                ...exist,
                quantity: exist.quantity + quantity,
              }
            : item
        )
      );
    } else {
      //if it doesn't exist
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  //Remove product
  const onRemove = (product) => {
    //decrease Total Price
    setTotalPrice((prevTotal) => prevTotal - product.price);
    //decrease total quantity
    setTotalQuantities((prevTotal) => prevTotal - 1);

    //Check if the product is already in the cart
    const exist = cartItems.find((item) => item.slug === product.slug);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        qty,
        increaseQty,
        decreaseQty,
        showCart,
        setShowCart,
        cartItems,
        onAdd,
        onRemove,
        totalQuantities,
        totalPrice,
        setQty,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

//use personal hook to not reused import ShopContext
export const useStateContext = () => useContext(ShopContext);
