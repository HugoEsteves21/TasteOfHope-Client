import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import profileImg from '../images/profile-img.jpg';

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
  }, [userId]);

  return (
    <div className="profilePage">
      {donor && (
        <>
          <header>
            <img src={profileImg} alt="profile-pic" class="profile-image" />
            <h1 class="tag name">
              Hello, {user.firstName} {user.lastName}
            </h1>
            <p class="tag location">Logged in with: {user.email}</p>
            <p class="tag location">Phone Number: {user.phoneNumber}</p>

            <Link class="tag name" to={`/profile/edit/${user._id}`}>
              Edit Account
            </Link>
          </header>
          <div class="profile-favs">
            <div>
              <h2>Baskets you gave 🥰</h2>
              {user.givenBaskets.map((baskets) => (
                <li>
                  <h6>{baskets}</h6>
                </li>
              ))}
            </div>
          </div>
        </>
      )}

      {needful && (
        <>
          <header>
            <img src={profileImg} alt="profile-pic" class="profile-image" />
            <h1 class="tag name">
              Hello, {user.firstName} {user.lastName}
            </h1>
            <p class="tag location">Logged in with: {user.email}</p>
            <p class="tag location">Phone Number: {user.phoneNumber}</p>

            <Link class="tag name" to={`/profile/edit/${user._id}`}>
              Edit Account
            </Link>
          </header>
          <div class="profile-favs">
            <div>
              <h2>Baskets you received 🥰</h2>
              {user.receivedBaskets.map((baskets) => (
                <li>
                  <h6>{baskets}</h6>
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
