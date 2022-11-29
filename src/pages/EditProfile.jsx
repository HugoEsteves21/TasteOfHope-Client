import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function EditProfile() {
  // const { firstName, lastName, phoneNumber}
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handlePhoneNumber = (e) => setPhoneNumber(e.target.value);

  const getProfile = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/profile/${id}`,
        {
          headers: { Authorization: `Bearer ${storedToken}` },
        }
      );

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

    try {
      const storedToken = localStorage.getItem("authToken");

      await axios.put(`${process.env.REACT_APP_API_URL}/profile/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      setFirstName("");
      setLastName("");
      setPhoneNumber("");

      navigate(`/profile/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProfile = async () => {
    try {
      const storedToken = localStorage.getItem("authToken");

      await axios.delete(`${process.env.REACT_APP_API_URL}/profile/${id}`, {
        headers: { Authorization: `Bearer ${storedToken}` },
      });

      logout();

      navigate("/");
    } catch (error) {}
  };

  return <div></div>;
}

export default EditProfile;
