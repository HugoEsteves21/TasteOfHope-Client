import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../basket.css";

function AddBasket() {
  const navigate = useNavigate();

  const { authenticateUser, user } = useContext(AuthContext);

  const [type, setType] = useState("");
  const [market, setMarket] = useState(null);
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);
  const [marketData, setMarketData] = useState([]);

  const handleMarket = (e) => setMarket(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // getting the authorization token of the user in the local storage
      const storedToken = localStorage.getItem("authToken");

      await axios.post(
        `${process.env.REACT_APP_API_URL}/basket`,
        { basketType: type, market, products, price },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setType("");
      setMarket(null);
      setProducts([]);
      setPrice(0);

      navigate(`/profile/${user._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const getMarkets = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/markets`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setMarketData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSmall = (e) => {
    let typeBasket = "S";
    setType(typeBasket);

    let smallProducts = [
      "638644733d2794a086fed2a2",
      "638644743d2794a086fed2b6",
      "638644733d2794a086fed29b",
    ];
    setProducts(smallProducts);

    setPrice(5.4);
  };

  const getMedium = (e) => {
    let typeBasket = "M";
    setType(typeBasket);

    let smallProducts = [
      "638644733d2794a086fed2a2",
      "638644743d2794a086fed2b6",
      "638644733d2794a086fed29b",
      "638644733d2794a086fed2a4",
      "638644743d2794a086fed2ae",
      "638644733d2794a086fed2a1",
    ];
    setProducts(smallProducts);

    setPrice(8.75);
  };

  const getLarge = (e) => {
    let typeBasket = "L";
    setType(typeBasket);

    let smallProducts = [
      "638644733d2794a086fed2a2",
      "638644743d2794a086fed2b6",
      "638644733d2794a086fed29b",
      "638644733d2794a086fed2a4",
      "638644743d2794a086fed2ae",
      "638644733d2794a086fed2a1",
      "638644733d2794a086fed29e",
      "638644733d2794a086fed29c",
      "638644743d2794a086fed2ac",
    ];
    setProducts(smallProducts);

    setPrice(16.45);
  };

  useEffect(() => {
    getMarkets();
    authenticateUser();
  }, []);

  return (
    <div className="padding backgroundColor">
      <div className="addBasket">
        <article className="addBasketOutline">
          <img
            className="images-addCart"
            src="https://img.freepik.com/premium-vector/paper-bag-with-food-grocery-delivery-concept-vector-illustration-cartoon-style_650087-41.jpg?w=2000"
            alt="small basket"
          />
          <h3>Small Basket</h3>
          <p>
            <b>Available Products:</b>
          </p>
          <ul>
            <li>Rice 1kg</li>
            <li>Canned Chick Peas 260g x 2</li>
            <li>Tuna 120g x 2</li>
          </ul>
          <p>
            <b>Price:</b> 5,40€
          </p>

          <div className="divAddBasket">
            <form className="formAddBasket" onSubmit={handleSubmit}>
              <select
                name="market"
                id="market"
                required
                size="3"
                onChange={handleMarket}
              >
                {marketData.map((market) => (
                  <option key={market._id} value={market._id}>
                    {market.name}
                  </option>
                ))}
              </select>

              <button onClick={getSmall} type="submit">
                Buy this one
              </button>
            </form>
          </div>
        </article>

        <article className="addBasketOutline">
          <img
            className="images-addCart"
            src="https://img.freepik.com/premium-vector/red-shopping-basket-full-groceries_23-2148646800.jpg?w=740"
            alt="medium basket"
          />
          <h3>Medium Basket</h3>
          <p>
            <b>Available Products:</b>
          </p>
          <ul>
            <li>Rice 1kg</li>
            <li>Canned Chick Peas 260g x 2</li>
            <li>Tuna 120g x 2</li>
            <li>Salt 1kg</li>
            <li>Vegetable Oil 1L</li>
            <li>Milk 1L</li>
          </ul>
          <p>
            <b>Price:</b> 8,75€
          </p>

          <div className="divAddBasket">
            <form className="formAddBasket" onSubmit={handleSubmit}>
              <select
                name="market"
                id="market"
                required
                size="3"
                onChange={handleMarket}
              >
                {marketData.map((market) => (
                  <option key={market._id} value={market._id}>
                    {market.name}
                  </option>
                ))}
              </select>

              <button onClick={getMedium} type="submit">
                Buy this one
              </button>
            </form>
          </div>
        </article>

        <article className="addBasketOutline">
          <img
            className="images-addCart"
            src="https://img.freepik.com/premium-vector/shopping-cart-with-products-illustration-buying-food-supermarket-grocery-store-trolley-fresh-fruits-vegetables-purchase-dairy-products-cereals-healthy-diet-nutrition_276875-342.jpg?w=2000"
            alt="big basket"
          />
          <h3>Large Basket</h3>
          <p>
            <b>Available Products:</b>
          </p>
          <ul>
            <li>Rice 1kg</li>
            <li>Canned Chick Peas 260g x 2</li>
            <li>Tuna 120g x 2</li>
            <li>Salt 1kg</li>
            <li>Vegetable Oil 1L</li>
            <li>Milk 1L</li>
            <li>Canned Mushrooms 780g x 2</li>
            <li>Canned Sausages 10 units x 4</li>
            <li>Flour 1kg</li>
          </ul>
          <p>
            <b>Price:</b> 16,45€
          </p>

          <div className="divAddBasket">
            <form className="formAddBasket" onSubmit={handleSubmit}>
              <select
                name="market"
                id="market"
                required
                size="3"
                onChange={handleMarket}
              >
                {marketData.map((market) => (
                  <option key={market._id} value={market._id}>
                    {market.name}
                  </option>
                ))}
              </select>

              <button onClick={getLarge} type="submit">
                Buy this one
              </button>
            </form>
          </div>
        </article>
      </div>
    </div>
  );
}

export default AddBasket;
