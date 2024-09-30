import { create } from "zustand";
import { Product } from "./interfaces";

export interface CartState {
  products: Array<Product & { quantity: number }>;
  addProduct: (product: Product) => void;
  reduceProduct: (product: Product) => void;
  clearCart: () => void;
  items: number;
}
const useCartStore = create<CartState>((set) => ({
  products: [],
  addProduct: (product: Product) =>
    set((state) => {
      state.items++;
      const productInCart = state.products.find((p) => p.id === product.id);
      if (productInCart) {
        return {
          products: state.products.map((p) => {
            if (p.id === product.id) {
              return { ...p, quantity: p.quantity + 1 };
            } else {
              return p;
            }
          }),
        };
      } else {
        return {
          products: [...state.products, { ...product, quantity: 1 }],
        };
      }
    }),
  reduceProduct: (product: Product) =>
    set((state) => {
      state.items--;
      const productInCart = state.products.find((p) => p.id === product.id);
      if (productInCart && productInCart.quantity > 1) {
        return {
          products: state.products.map((p) => {
            if (p.id === product.id) {
              return { ...p, quantity: p.quantity - 1 };
            } else {
              return p;
            }
          }),
        };
      } else {
        return {
          products: state.products.filter((p) => p.id !== product.id),
        };
      }
    }),
  clearCart: () =>
    set((state) => {
      return {
        items: 0,
        products: [],
      };
    }),
  items: 0,
}));

export default useCartStore;
