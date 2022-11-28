import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../auth.css';

function SignupPage() {
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  /* const [donor, setDonor] = useState("");
  const [needful, setNeedful] = useState(""); */

  const [userType, setUserType] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };
  /*  const handleDonor = (e) => {
    setDonor(e.target.value);
  };
  const handleNeedful = (e) => {
    setNeedful(e.target.value);
  }; */

  const handleUserType = (e) => {
    setUserType(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      firstName,
      lastName,
      email,
      userType,
      phoneNumber,
      password,
    };

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/signup`, body)
      .then(() => {
        navigate('/login');
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="signupBody">
      <div className="signupPageB">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit} className="signupForm">
          <label htmlFor="firstName"> First Name*</label>
          <input
            type="text"
            placeholder="First Name"
            className="css-authinput"
            value={firstName}
            name="firstName"
            onChange={handleFirstName}
          />
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            placeholder="Last Name"
            className="css-authinput"
            value={lastName}
            name="lastName"
            onChange={handleLastName}
          />

          <label htmlFor="phoneNumber">Phone Number*</label>
          <input
            type="number"
            placeholder="9********"
            className="css-authinput"
            value={phoneNumber}
            name="phoneNumber"
            onChange={handlePhoneNumber}
          />

          {/*  <fieldset>
            <div>
              <label htmlFor="userType">User Type*</label>
            </div>

            <div>
              <input
                type="checkbox"
                className="css-authinput"
                label="Donor"
                value={donor}
                name="userType"
                onChange={handleDonor}
              />
              <label htmlFor="donor">Donor</label>
           
              <input
                type="checkbox"
                className="css-authinput"
                label="Needful"
                value={needful}
                name="userType"
                onChange={handleNeedful}
              />
              <label htmlFor="needful">Needful</label>
            </div>
          </fieldset> */}

          <label htmlFor="userType">User Type*</label>
          <input
            type="text"
            placeholder="User type"
            className="css-authinput"
            value={userType}
            name="userType"
            onChange={handleUserType}
          />

          <label htmlFor="email">Email address*</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="css-authinput"
            value={email}
            name="email"
            onChange={handleEmail}
          />

          <label htmlFor="password">Password*</label>
          <input
            type="password"
            className="css-authinput"
            value={password}
            name="password"
            onChange={handlePassword}
          />

          <button className="signupBtnSubmit" type="submit">
            Sign Up
          </button>

          <p className="loginFormPhraseP">Already have an account?</p>
          <Link to="/login" className="loginLinkBtn">
            Log in here
          </Link>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default SignupPage;
