import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import axios from 'axios';
import '../auth.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/login`, body)
      .then((response) => {
        storeToken(response.data.authToken);
        authenticateUser();
        navigate('/home');
      })
      .catch((err) => {
        setErrorMessage(err.response.data.errorMessage);
      });
  };

  return (
    <div className="loginBody">
      <div className="loginPageB">
        <h1 className='loginH1'>Login </h1>
        <form onSubmit={handleLoginSubmit} className="loginForm">
          <label>Email address*</label>
          <input
            className="css-authinput"
            type="email"
            name="email"
            value={email}
            onChange={handleEmail}
          />

          <label>Password*</label>
          <input
            className="css-authinput"
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />

          <button className="loginBtnSubmit" type="submit">
            Log in
          </button>
          <p className="loginFormPhraseP">Don't have an account yet?</p>
          <Link to={'/signup'} className="signupLinkBtn">
            Sign Up here
          </Link>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default LoginPage;
