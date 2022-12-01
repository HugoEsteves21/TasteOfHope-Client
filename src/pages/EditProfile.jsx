import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import '../profile.css';

function EditProfile() {
  // const { firstName, lastName, phoneNumber}
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const { id } = useParams();
  const navigate = useNavigate();
  const { logout, tokenUpdate } = useContext(AuthContext);

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const getProfile = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      const response = await axios.get(`${process.env.REACT_APP_API_URL}/profile/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setPhoneNumber(response.data.phoneNumber);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = { firstName, lastName, phoneNumber };
    try {
      const storedToken = localStorage.getItem('authToken');

      await axios.put(`${process.env.REACT_APP_API_URL}/profile/${id}`, body, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      tokenUpdate();

      navigate(`/profile/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProfile = async () => {
    try {
      const storedToken = localStorage.getItem('authToken');

      await axios.delete(`${process.env.REACT_APP_API_URL}/profile/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      logout();

      navigate('/');
    } catch (error) {}
  };

  return (
    <div className="editBody">
      <div className="editProfilePage">
        <h3 className="location">Edit Account</h3>

        <div className="profile-favs">
          <form className="editForm" onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <br />
            <input type="text" name="firstName" value={firstName} onChange={handleFirstName} />
            <br />

            <label htmlFor="lastName">Last Name:</label>
            <br />
            <input type="text" name="lastName" value={lastName} onChange={handleLastName} />
            <br />
            <label htmlFor="phoneNumber">Phone Number:</label>
            <br />
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumber}
            />
            <br />

            <button className="tag" type="submit">
              Save changes
            </button>
          </form>

          <button className="tag-delete" onClick={deleteProfile}>
            Delete Account ⚠️
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
