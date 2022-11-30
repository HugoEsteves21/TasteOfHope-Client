import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';
import '../home.css';

function HomePage() {
  const { user, authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <div className="homepage">
     
      <div className="hp-background cover-image">
        <div className='title-quote'>
        <q>Asking for help is never a sign of weakness. <br /> It's one of the bravest things
        you can do. <br /> And it can save your life.</q>
        </div>
      </div>
      
      <section>
        <div className="hp-intro">
          <p>
            <em>If you're willing to help, or need help, stay with us.</em>
          </p>
          <img src="https://img.freepik.com/free-photo/couple-holding-hands-green-meadow_1150-26188.jpg?w=996&t=st=1669818020~exp=1669818620~hmac=e7e9db253f96d7009e5b9f4fc5927fe66c4a3e68cc586faad723d63cbbbb8bbd" alt="" />
        </div>
      </section>
      <section>
        <div className="hp-intro">
          <p className='padding'>
          <q>The best way to not feel hopeless is to get up and do something. Don't wait for good
            things to happen to you. If you go out and make some good things happen, you will fill the
            world with hope, you will fill yourself with hope.</q><br />
            <em>- Barack Obama</em>
            <hr /> {/* "Asking for help is never a sign of weakness. <br /> It's one of the bravest things
            you can do. <br /> And it can save your life." */}
          </p>
        </div>
      </section>

      {!user && (
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
      )}
    </div>
  );
}

export default HomePage;
