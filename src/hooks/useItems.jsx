import axios from "axios";

export const useItems = () => {
  //Get Items
  const getItems = async (categoryId) => {
    const allItems = await axios.get(
      `${import.meta.env.VITE_GET_ITEMS}${categoryId}`
    );
    return allItems;
  };

  return { getItems };
};
