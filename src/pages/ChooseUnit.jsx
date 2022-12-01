import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function ChooseUnit() {
  // declare the state for the units
  const [units, setUnits] = useState([]);
  const [received, setReceived] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  // funtion to call the API
  const getUnits = async () => {
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

      setUnits(response.data);
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
    getUnits();
  }, []);

  // function to add the basket that the needful chooses
  const addUnit = async (unitId) => {
    try {
      const storedToken = localStorage.getItem("authToken");

      // we use put because we will change the state received
      await axios.put(`${process.env.REACT_APP_API_URL}/basket/${unitId}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
        received,
      });

      // change the state to positive, because the basket has been received by a needful
      setReceived(!received);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>What kind of Hope are you taking today? 🤗</h1>

      {units.map((unit) => {
        return (
          <div key={unit._id}>
            <h3>Type of Basket: {unit.basketType}</h3>
            <h4>Available in: {unit.market}</h4>
            <h4>Products inside:</h4>
            {unit.products.map((product) => (
              <li>
                <h6>{product}</h6>
              </li>
            ))}
            <p>{unit.received}</p>

            <button onClick={addUnit}>Get Basket 😎</button>
          </div>
        );
      })}
    </div>
  );
}

export default ChooseUnit;
