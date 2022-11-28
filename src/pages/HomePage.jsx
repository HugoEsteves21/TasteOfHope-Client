import React from 'react';
import { Link } from 'react-router-dom';
import '../home.css';

function HomePage() {
  return (
    <div className="homepage">
      <div className="hp-background"></div>
      <div className="hp-intro">
        <p>
          <em>If you're willing to help, or need help, stay with us.</em>
        </p>
        <p>
          “The best way to not feel hopeless is to get up and do something. Don't wait for good
          things to happen to you. If you go out and make some good things happen, you will fill the
          world with hope, you will fill yourself with hope.” <br />
          <em>- Barack Obama</em>
          <hr /> "Asking for help is never a sign of weakness. <br /> It's one of the bravest things
          you can do. <br /> And it can save your life."{' '}
        </p>
      </div>
      <div className="log-sign">
        <p className="loginFormPhraseP2">Don't have an account yet?</p>
        <Link to="/signup" className="signupLinkBtn2">
          Sign Up here
        </Link>
        <p className="loginFormPhraseP">Already have an account?</p>
        <Link to="/login" className="loginLinkBtn2">
          Log In here
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
