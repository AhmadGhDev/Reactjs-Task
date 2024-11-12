import { useContext } from "react";
import { CategoriesContext } from "../context/CategoriesContext";

export function useCategoriesContext() {
  const context = useContext(CategoriesContext);
  if (!context) throw new Error("Out of provider");
  return context;
}
