import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../auth.css';

function SignupPage() {
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = { firstName, lastName, email, password };

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
            placeholder="First"
            className="css-authinput"
            value={firstName}
            name="firstName"
            onChange={handleFirstName}
          />
          <label htmlFor="lastName">Last Name*</label>
          <input
            type="text"
            placeholder="Last"
            className="css-authinput"
            value={lastName}
            name="lastName"
            onChange={handleLastName}
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