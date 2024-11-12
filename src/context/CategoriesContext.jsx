/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { useCategories } from "../hooks/useCategories";
import { useEffect } from "react";
import { toast } from "react-toastify";

export const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
  const { getCategories } = useCategories();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    getCategories().then((res) => {
      if (res.data.status) {
        const data = res.data.data.categories;
        setCategories(data);
      } else {
        toast.error(res.data.message, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
        });
      }
    });
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
