import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import profileImg from '../images/profile-img.jpg';
import '../profile.css';

function Profile() {
  const [donor, setDonor] = useState(false);
  const [needful, setNeedfull] = useState(false);
  const [user, setUser] = useState(null);
  const { id } = useParams();

  const getUser = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      let response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setUser(response.data);

      if (response.data.userType === 'Donor') {
        setDonor(true);
      } else {
        setNeedfull(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, [id]);

  return (
    <div className="profilePage">
      {donor && (
        <>
          <header>
            <img src={profileImg} alt="profile-pic" className="profile-image" />
            <h1 className="location">
              Hello, {user.firstName} {user.lastName}
            </h1>
            <p className="location">Logged in with: {user.email}</p>
            <p className="location">Phone Number: {user.phoneNumber}</p>

            <Link className="tag" to={`/profile/${user._id}/edit`}>
              Edit Account
            </Link>
          </header>
          <div className="profile-favs">
            <div>
              <h2>Baskets you gave 🥰</h2>
              {user.givenBaskets.map((baskets) => (
                <li key={baskets._id}>
                  <h5>{baskets.basketType}</h5>
                  <h6>{baskets.received}</h6>
                  <h6>{baskets.price}</h6>
                </li>
              ))}
            </div>
          </div>
        </>
      )}

      {needful && (
        <>
          <header>
            <img src={profileImg} alt="profile-pic" className="profile-image" />
            <h1 className="location">
              Hello, {user.firstName} {user.lastName}
            </h1>
            <p className="location">Logged in with: {user.email}</p>
            <p className="location">Phone Number: {user.phoneNumber}</p>

            <Link className="tag" to={`/profile/edit/${user._id}`}>
              Edit Account
            </Link>
          </header>
          <div className="profile-favs">
            <div>
              <h2>Baskets you received 🥰</h2>
              {user.receivedBaskets.map((baskets) => (
                <li key={baskets._id}>
                  <h5>{baskets.basketType}</h5>
                  <h6>{baskets.market[0]}</h6>
                </li>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Profile;
