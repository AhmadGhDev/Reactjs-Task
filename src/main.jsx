import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CategoriesProvider } from "./context/CategoriesContext.jsx";
import { ItemsProvider } from "./context/ItemsContext.jsx";
import App from "./App.jsx";
import { CartProvider } from "./context/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CategoriesProvider>
      <ItemsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ItemsProvider>
    </CategoriesProvider>
  </BrowserRouter>
);
