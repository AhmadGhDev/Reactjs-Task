import SearchBox from "../components/SearchBox";
import Item from "../components/Item";
import CartTracker from "../components/CartTracker";
import ItemPopup from "../components/ItemPopup";
import { useItemsContext } from "../hooks/useItemsContext";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useItems } from "../hooks/useItems";
import LoadingPage from "./LoadingPage";
import SearchBullets from "../components/SearchBullets";
import { toast } from "react-toastify";

export default function ItemsList() {
  const { getItems } = useItems();
  const { categoryId } = useParams();
  const { items, setItems, itemPopup } = useItemsContext();

  //Get Category Items
  useEffect(() => {
    setItems(null);
    getItems(categoryId).then((res) => {
      if (res.data.status) {
        const data = res.data.data.items.data;
        setItems(data);
      } else {
        toast.error(res.data.message, {
          position: "top-center",
          autoClose: 4000,
          hideProgressBar: true,
        });
      }
    });
  }, [categoryId]);

  if (!items) {
    return <LoadingPage />;
  } else
    return (
      <>
        <SearchBox placeholder={"Search for Dishes, Drinks ..."} />
        <SearchBullets />
        <div className="items-list">
          {items.map((item) => {
            return <Item key={item.id} itemDet={item} />;
          })}
        </div>
        {itemPopup && <ItemPopup />}
        <CartTracker />
      </>
    );
}
