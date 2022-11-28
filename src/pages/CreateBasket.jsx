import { useState } from "react";
import axios from "axios";

function CreateBasket() {
  const [type, setType] = useState("");
  const [market, setMarket] = useState("");
  const [products, setProducts] = useState("");
  const [price, setPrice] = useState(0);

  const handleType = (e) => setType(e.target.value);
  const handleMarket = (e) => setMarket(e.target.value);
  const handlePrice = (e) => setPrice(e.target.value);
  /* const handleProducts = (e) => {
    setProducts(e.target.value);

    let sumProducts = products.reduce((acc, val) => acc + val, 0);

    setPrice(sumProducts);
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // getting the authorization token of the user in the local storage
      const storedToken = localStorage.getItem("authToken");

      await axios.post(`${process.env.REACT_APP_API_URL}/basket`, {
        headers: { Authorization: `Bearer ${storedToken}` },
        type,
        market,
        products,
        price,
      });

      setType("");
      setMarket("");
      //setProducts("");
      setPrice(0);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userType">What kind of help do you wish to give?</label>

        <select
          name="basketType"
          id="basketType"
          autofocus
          required
          size="4"
          onChange={handleType}
        >
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="Hope">Hope</option>
        </select>

        <label htmlFor="market">Where are you dropping your basket?</label>
        <input
          type="text"
          name="market"
          value={market}
          onChange={handleMarket}
        />

        {/* {products.map((product) => (
          <div>
            <img src={product.imageUrl} alt="product choice" />
            <input
              type="radio"
              label={product}
              value={product}
              name={product}
              onClick={handleProducts}
            />
            <label htmlFor={product}>{product}</label>
            <p>{product.packageSize}</p>
            <p>{product.price}</p>
          </div>
        ))} */}

        {/* <label htmlFor="price">Price:{price}</label> */}

        <button type="submit">I'm ready to help!</button>
      </form>
    </div>
  );
}

export default CreateBasket;
