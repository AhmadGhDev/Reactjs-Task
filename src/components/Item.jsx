import { useItemsContext } from "../hooks/useItemsContext";

/* eslint-disable react/prop-types */
export default function Item({ itemDet }) {
  const { setItemPopup } = useItemsContext();
  const { description, display_name, image, price } = itemDet;

  const handlePopupItem = (item) => {
    setItemPopup(item);
  };

  return (
    <div onClick={() => handlePopupItem(itemDet)} className="item">
      <div className="item-img">
        <img src={image} alt="" />
      </div>
      <div className="item-det">
        <h5 className="item-title">{display_name}</h5>
        <p className="item-des">{description}</p>
        <div className="item-add-cart">
          <div className="price">AED {price}</div>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}
