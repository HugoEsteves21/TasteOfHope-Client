import React from 'react';
import { Link } from 'react-router-dom';
import hugoImg from '../images/hugo-img.jpeg';
import brunoImg from '../images/bruno-img2.jpeg';
import '../aboutUs.css';

function AboutUs() {
  return (
    <div>
      <article className="about-us">
        <p id="aboutP">
          First of all, we want to thank you all for joining this community. <br />
          With this website, we hope to be helpful to the whole society. <br />
          We intend to promote good practices and help those who need it most. <br />
          With everyone's help, we can fight against food waste, as well as bring food to those who
          need it.
        </p>
        <hr />
        <h1 className="aboutH1">Who are we?</h1>
        <p id="aboutP2">
          Two starting web developers, who, while developing the third project of Ironhack's
          Bootcamp, decided to find a way to not only develop our skills, but also to help others.{' '}
          <br />
          Technology, sports, coffee, beer and board games lovers.
        </p>

        <div className="profiles">
          <div className="ind-profile">
            <header>
              <img src={hugoImg} alt="hugo-pic" className="profile-image" />
              <h2>Hugo Esteves</h2>
              <p id="aboutMeP">Full Stack Developer with a background in Mathematics and Data.</p>
              <div className="profile-buttons">
                <a
                  className="tag"
                  href="https://github.com/HugoEsteves21/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  className="tag"
                  href="https://www.linkedin.com/in/hugo-veiga-esteves/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </header>
          </div>
          <div className="ind-profile">
            <header>
              <img src={brunoImg} alt="bruno-pic" className="profile-image" />
              <h2>Bruno Rocha</h2>
              <p id="aboutMeP2">
                Full Stack Developer with a background in Physical Education and Sports.
              </p>
              <div className="profile-buttons">
                <a
                  className="tag"
                  href="https://github.com/brunorocha20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  className="tag"
                  href="https://www.linkedin.com/in/bruno-m-a-rocha/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </header>
          </div>
        </div>
      </article>
    </div>
  );
}

export default AboutUs;
