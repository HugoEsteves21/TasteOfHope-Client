import { useState, useEffect } from "react";
import axios from "axios";

function CreateBasket() {
  const [type, setType] = useState("");
  const [market, setMarket] = useState("");
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);

  const handleType = (e) => setType(e.target.value);
  const handleMarket = (e) => setMarket(e.target.value);
  //const handlePrice = (e) => setPrice(e.target.value);
  const handleProducts = (e) => {
    let sumProducts = data.reduce((acc, cur) => acc + cur.price, 0);

    setPrice(sumProducts);
    setProducts(e.target.value);
  };

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
      setProducts([]);
      setPrice(0);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/products`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
    <h1>dgsfdh</h1>
    <h1>dgsfdh</h1>
    <h1>dgsfdh</h1>
    <h1>dgsfdh</h1>
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

        {data.map((product) => (
          <div key={product._id}>
            <img src={product.imageUrl} alt="product choice" />
            <h5>{product.name}</h5>
            <input
              type="radio"
              label={product}
              value={product}
              name={product._id}
              onClick={handleProducts}
            />

            {/* <label htmlFor={product}>{product}</label> */}
            <p>{product.packageSize}</p>
            <p>{product.price} €</p>
          </div>
        ))}

        <label htmlFor="price">Price:{price}</label>

        <button type="submit">I'm ready to help!</button>
      </form>
    </div>
  );
}

export default CreateBasket;
