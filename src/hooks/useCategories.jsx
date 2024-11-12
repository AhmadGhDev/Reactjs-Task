import axios from "axios";

export const useCategories = () => {
  //Get Categories
  const getCategories = async () => {
    const allCategories = await axios.get(import.meta.env.VITE_GET_CATEGORIES);
    return allCategories;
  };

  return { getCategories };
};
