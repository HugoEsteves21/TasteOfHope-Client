import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ChooseBasket() {
  // declare the state for the baskets
  const [baskets, setBaskets] = useState([]);
  const [received, setReceived] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  // funtion to call the API
  const getBaskets = async () => {
    try {
      // getting the authorization token of the user in the local storage
      const storedToken = localStorage.getItem("authToken");

      // every route protected on the backend needs to receive the headers object with the token that authorizes the user to get in
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/market/${id}/baskets"`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setBaskets(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // funtion to call the backend route updateToken that updates the token everytime the user to perform changes
  /*   const tokenUpdate = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/updateToken`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }; */

  useEffect(() => {
    getBaskets();
  }, []);

  // function to add the basket that the needful chooses
  const addBasket = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      // we use put because we will change the state received
      await axios.put(`${process.env.REACT_APP_API_URL}/basket/${id}"`, {
        headers: { Authorization: `Bearer ${storedToken}` },
        received,
      });

      // change the state to positive, because the basket has been received by a needful
      setReceived(!received);

      navigate("/home/user");
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
            <h4>Available in: {basket.market}</h4>
            <h4>Products inside:</h4>
            {basket.products.map((product) => (
              <li>
                <h6>{product}</h6>
              </li>
            ))}
            <p>{basket.received}</p>

            <button onClick={addBasket}>Get Basket 😎</button>
          </div>
        );
      })}
    </div>
  );
}

export default ChooseBasket;
