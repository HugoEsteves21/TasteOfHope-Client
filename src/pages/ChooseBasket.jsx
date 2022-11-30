import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function ChooseBasket() {
  // declare the state for the baskets
  const [baskets, setBaskets] = useState([]);
  const [received, setReceived] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const { tokenUpdate } = useContext(AuthContext);
  // funtion to call the API
  const getBaskets = async () => {
    try {
      // getting the authorization token of the user in the local storage
      const storedToken = localStorage.getItem("authToken");

      // every route protected on the backend needs to receive the headers object with the token that authorizes the user to get in
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/market/${id}/baskets`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      // update the list of basket that the user can see
      let filteredBaskets = response.data.basket.filter(
        (basket) => basket.received === false
      );

      setBaskets(filteredBaskets);

      console.log(response.data.basket);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBaskets();
  }, []);

  // function to add the basket that the needful chooses
  const addBasket = async (basket) => {
    try {
      const storedToken = localStorage.getItem("authToken");
      const body = { received: !received, products: basket.products };
      // we use put because we will change the state received
      await axios.put(
        `${process.env.REACT_APP_API_URL}/basket/${basket._id}`,
        body,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      // change the state to positive, because the basket has been received by a needful
      setReceived(!received);
      tokenUpdate();

      // update the list of basket that the user can see
      let filteredBaskets = baskets.filter(
        (basket) => basket.received === false
      );

      setBaskets(filteredBaskets);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>What kind of Hope are you taking today? 🤗</h1>

      {baskets.map((basket) => {
        return (
          <div key={basket._id}>
            <h3>Type of Basket: {basket.basketType}</h3>
            <h4>Products inside:</h4>
            {basket.products.map((product) => {
              return (
                <li key={product._id}>
                  <h6>{product.name}</h6>
                </li>
              );
            })}
            <p>
              {basket.received
                ? "This basket has been claimed 😔"
                : "I'm available 😊"}
            </p>

            <button onClick={() => addBasket(basket)}>Get Basket 😎</button>
          </div>
        );
      })}
    </div>
  );
}

export default ChooseBasket;
