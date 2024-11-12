import "./style/main.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Categories from "./pages/Categories";
import ItemsList from "./pages/ItemsList";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/:categoryId" element={<ItemsList />} />
      </Routes>
    </>
  );
}

export default App;
