import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import "../home.css";
import coverImage1 from "../images/basket-vegetables-with-grocery-bag-cover.jpg";
import coverImage2 from "../images/holding-hands-cover.jpg";

function HomePage() {
  const { user, authenticateUser } = useContext(AuthContext);

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <div className="homepage">
      <div className="hp-background cover-image">
        <div className="title-quote">
          <q>
            Asking for help is never a sign of weakness. <br /> It's one of the
            bravest things you can do. <br /> And it can save your life.
          </q>
        </div>
      </div>

      <section>
        <div className="hp-intro cover-section2">
          <p className="cover-section2-style">
            <em>
              If you're willing to help, or need help,
              <br /> stay with us.
            </em>
          </p>
          <img
            className="cover-section2-image cover-section2-style"
            src={coverImage2}
            alt=""
          />
        </div>
      </section>
      <section>
        <div className="hp-intro">
          <img
            className="cover-section2-image cover-section2-style"
            src="https://s.abcnews.com/images/US/OBAMA_FOOD_BANK_181122KA_hpMain_16x9_992.jpg"
            alt=""
          />
          <p className="padding">
            <q className="cover-section2 p">
              The best way to not feel hopeless is to get up and do something.
              Don't wait for good things to happen to you. If you go out and
              make some good things happen, you will fill the world with hope,
              you will fill yourself with hope.
            </q>
            <br />
            <em>- Barack Obama</em>
            <hr />{" "}
            {/* "Asking for help is never a sign of weakness. <br /> It's one of the bravest things
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
