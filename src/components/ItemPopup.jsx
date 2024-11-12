import { useState } from "react";
import { useItemsContext } from "../hooks/useItemsContext";
import { useCartContext } from "../hooks/useCartContext";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

export default function ItemPopup() {
  const { itemPopup, setItemPopup } = useItemsContext();
  const { setCart } = useCartContext();
  const { id, description, display_name, image, price, extrasWithOptions } =
    itemPopup;
  const [quant, setQuant] = useState(1);
  const [loader, setLoader] = useState(false);

  //Handle Items Number
  const handleQuant = (expression) => {
    switch (expression) {
      case "INCREMENT":
        setQuant(quant + 1);
        break;
      case "DECREMENT":
        quant != 1 && setQuant(quant - 1);
        break;
      default:
        setQuant(1);
    }
  };

  const handleOrder = () => {
    setLoader(true);
    axios
      .post(import.meta.env.VITE_ORDER, {
        restaurant_id: 7,
        item_id: id,
        quantity: quant,
      })
      // Handle Success Request
      .then((res) => {
        if (res.data.status) {
          setCart(res.data.data);
          setLoader(false);
          toast.success(`${display_name} added to your cart`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
          });
        }
        // Handle Error Message
        else {
          toast.error(`${res.data.message} added to your cart`, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: true,
          });
        }
      });
  };

  return (
    <>
      <div className="popup-lay"></div>
      <div className="item-popup">
        <div onClick={() => setItemPopup(null)} className="exit-popup">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="#00628e"
              d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
            />
            <path
              fill="#00628e"
              d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
            />
          </svg>
        </div>
        <div className="item-det">
          <div className="popup-img">
            <img src={image} alt={image} />
          </div>
          <h5 className="popup-title">{display_name}</h5>
          <div className="popup-desc">{description}</div>
          <div className="popup-price">
            <div className="popup-subtotal">AED {quant * price}</div>
            <div className="popup-quant">
              <button onClick={() => handleQuant("DECREMENT")}>-</button>
              <input name="quantity" value={quant} type="text" />
              <button onClick={() => handleQuant("INCREMENT")}>+</button>
            </div>
          </div>
        </div>
        {!extrasWithOptions.length || (
          <div className="customize-item">
            <div className="customize-lists">
              {extrasWithOptions.map((list, extraIndex) => {
                if (list.extra_type_name == "radio") {
                  return (
                    <div key={list.id} className="customize-list">
                      <h5 className="customize-title">{list.name}</h5>
                      <ul>
                        {list.option.map((option) => {
                          return (
                            <li key={option.id}>
                              {option.name}
                              <div>
                                {option.option_has_price && (
                                  <label>
                                    + {option.currency} {option.price}
                                  </label>
                                )}
                                <input
                                  name={`extras[${extraIndex}][${option.id}]`}
                                  value="Rare"
                                  type="radio"
                                  required
                                />
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                } else {
                  <div className="customize-list">
                    <h5 className="customize-title">{list.name}</h5>
                    <ul>
                      {list.option.map((option) => {
                        return (
                          <li key={option.id}>
                            {option.name}
                            <div>
                              {option.option_has_price && (
                                <label>
                                  + {option.currency} {option.price}
                                </label>
                              )}
                              <input
                                name={`extras[${extraIndex}][${option.id}]`}
                                value="Truffle and parmesan fries"
                                type="checkbox"
                              />
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>;
                }
              })}
            </div>
          </div>
        )}
        <button
          disabled={loader}
          onClick={handleOrder}
          className="popup-add-cart"
        >
          <div>
            {loader ? (
              <div className="loader"></div>
            ) : (
              <div>
                <span>+</span> Add to Cart
              </div>
            )}
          </div>
          <div>AED {quant * price}</div>
        </button>
      </div>
      <ToastContainer />
    </>
  );
}
