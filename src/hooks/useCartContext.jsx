import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) throw new Error("Out of provider");
  return context;
}
