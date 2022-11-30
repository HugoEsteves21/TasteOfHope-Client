import React from 'react';
import { Link } from 'react-router-dom';
import hugoImg from '../images/hugo-img.jpeg';
import brunoImg from '../images/bruno-img2.jpeg';
import '../aboutUs.css';

function AboutUs() {
  return (
    <div>
      <article className="about-us">
        <p>
          First of all, we want to thank you all for joining this community. <br />
          With this website, we hope to be helpful to the whole society. <br />
          We intend to promote good practices and help those who need it most. <br />
          With everyone's help, we can fight against food waste, as well as bring food to those who
          need it.
        </p>
        <hr />
        <h1>Who are we?</h1>
        <p>
          Two starting web developers, who, while developing the third project of Ironhack's
          Bootcamp, decided to find a way to not only develop our skills, but also to help others.{' '}
          <br />
          Technology, sports, coffee, beer and board games lovers.
        </p>

        <div className="profiles">
          <div className="ind-profile">
            <header>
              <img src={hugoImg} alt="hugo-pic" className="profile-image" />
              <p>Full Stack Developer with a background in Mathematics and Data.</p>
              <div className='profile-buttons'>
              <Link className="tag" to="https://github.com/HugoEsteves21/">
                Github
              </Link>
              <Link className="tag" to="https://www.linkedin.com/in/hugo-veiga-esteves/">
                LinkedIn
              </Link>
              </div>
            </header>
          </div>
          <div className="ind-profile">
            <header>
              <img src={brunoImg} alt="bruno-pic" className="profile-image" />
              <p>Full Stack Developer with a background in Sports.</p>
              <div className='profile-buttons'>
              <Link className="tag" to="https://github.com/brunorocha20">
                Github
              </Link>
              <Link className="tag" to="https://www.linkedin.com/in/bruno-m-a-rocha/">
                LinkedIn
              </Link>
              </div>
            </header>
          </div>
        </div>
      </article>
    </div>
  );
}

export default AboutUs;
