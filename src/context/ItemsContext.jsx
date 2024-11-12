/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const ItemsContext = createContext(null);

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(null);
  const [itemPopup, setItemPopup] = useState(null);

  return (
    <ItemsContext.Provider value={{ items, setItems, setItemPopup, itemPopup }}>
      {children}
    </ItemsContext.Provider>
  );
};
