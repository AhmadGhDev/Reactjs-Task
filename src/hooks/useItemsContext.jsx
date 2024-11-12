import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";

export function useItemsContext() {
  const context = useContext(ItemsContext);
  if (!context) throw new Error("Out of provider");
  return context;
}
