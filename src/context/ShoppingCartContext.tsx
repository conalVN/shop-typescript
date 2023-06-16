import { ReactNode, createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components";
type ShoppingCartProviderProps = {
  children: ReactNode;
};
type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
};
type CartItem = {
  id: number;
  quantity: number;
  // name: string;
};

const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems?.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      } else {
        return curItems?.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems?.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id);
      } else {
        return curItems?.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeQuantity(id: number) {
    setCartItems((curItems) => {
      return curItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeQuantity,
        cartItems,
        cartQuantity,
        openCart,
        closeCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
