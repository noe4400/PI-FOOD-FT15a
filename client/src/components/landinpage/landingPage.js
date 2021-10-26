import React from "react";
import landingImg from "./chef2.png";
import arrow from "./arrow.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import landingStyles from "./ladingPage.module.css";

const LandingPage = () => {
  return (
    <div className={landingStyles.main}>
      <div className={landingStyles.container}>
        <div className={landingStyles.leftSide}>
          <h1>Welcome</h1>
          <h3>
            <span>Join us</span> and discover hundreds of recipes.
          </h3>

          <Link to="/home">
            <button className={landingStyles.logInButton}>
              Star Now
              <div className={landingStyles.arrowButton}>
                <FontAwesomeIcon icon={faAngleRight} />
                <FontAwesomeIcon icon={faAngleRight} />
              </div>
            </button>
          </Link>
        </div>

        <div className={landingStyles.rightSide}>
          <img src={landingImg} alt="chef-image" />
          <div className={landingStyles.rectangleImg}></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
