import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import '../basket.css';

function CreateBasket() {
  const navigate = useNavigate();

  const { authenticateUser, user } = useContext(AuthContext);

  const [type, setType] = useState('Hope');
  const [market, setMarket] = useState(null);
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);
  const [data, setData] = useState([]);
  const [marketData, setMarketData] = useState([]);

  //const handleType = (e) => setType(e.target.value);
  //const handlePrice = (e) => setPrice(e.target.value);

  const handleMarket = (e) => setMarket(e.target.value);
  const handleProducts = (e) => {
    let newProducts = [...products, e.target.value];

    setProducts(newProducts);

    let sumProducts = data.reduce((acc, cur) => {
      if (newProducts.includes(cur._id)) {
        return acc + cur.price;
      }
      return acc;
    }, 0);

    setPrice(sumProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // getting the authorization token of the user in the local storage
      const storedToken = localStorage.getItem('authToken');

      await axios.post(
        `${process.env.REACT_APP_API_URL}/basket`,
        { basketType: type, market, products, price },
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

      setType('Hope');
      setMarket(null);
      setProducts([]);
      setPrice(0);

      navigate(`/profile/${user._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/products`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMarkets = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/markets`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setMarketData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getMarkets();
    authenticateUser();
  }, []);

  return (
    <div className="padding">
    
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="userType">What kind of help do you wish to give?</label>

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
        </select> */}

        <label htmlFor="market">Where are you dropping your basket?</label>

        <select name="market" id="market" required size="5" onChange={handleMarket}>
          {marketData.map((market) => (
            <option key={market._id} value={market._id}>
              {market.name}
            </option>
          ))}
        </select>

        {/*  <input
          type="text"
          name="market"
          value={market}
          onChange={handleMarket}
        /> */}

        <label htmlFor="produt">What are you offering?</label>
        <div className='addProd'>
        {data.map((product) => (
          <div className='individual' key={product._id}>
            <img className='images' src={product.imageUrl} alt="product choice" />
            <h5>{product.name}</h5>
            <input
              type="radio"
              label={product}
              value={product._id}
              name={product._id}
              onClick={handleProducts}
            />

            {/* <label htmlFor={product}>{product}</label> */}
            <p>{product.packageSize}</p>
            <p>{product.price} €</p>
          </div>
        ))}
        </div>

        <label htmlFor="price">Price:{price}</label>

        <button type="submit">I'm ready to help!</button>
      </form>
    </div>
  );
}

export default CreateBasket;
