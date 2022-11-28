import { useState } from "react";
import axios from "axios";

function CreateBasket() {
  const [type, setType] = useState("");
  const [market, setMarket] = useState("");
  const [products, setProducts] = useState("");
  const [price, setPrice] = useState(0);

  const handleType = (e) => setType(e.target.value);
  const handleMarket = (e) => setMarket(e.target.value);
  const handleProducts = (e) => {
    
    setProducts(e.target.value);

    products.reduce
  };
  //const handlePrice =  (e) => setPrice(e.target.value);

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
      setProducts("");
      setPrice(0);
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userType">What kind of help do you wish to give?</label>

        <select name="basketType" id="basketType" autofocus required size='4' onChange={handleType}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="Hope">Hope</option>
        </select>

        <label htmlFor="market">Where are you dropping your basket?</label>
        <input type="text" name="market" value={market} onChange={handleMarket} />
        
        {products.map((product) => (
          

        ))}
        
        

        <label htmlFor="price" onChange={}>Price: {price}</label>

        <button type="submit">I'm ready to help!</button>
      </form>
    </div>
  );
}

export default CreateBasket;
