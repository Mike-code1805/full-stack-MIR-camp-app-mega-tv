/* eslint arrow-body-style: ["error", "always"] */
/* eslint-env es6 */
import React from "react";
import { useRouter } from "../../hooks/useRouter";
import Button from "../../shared/button/index.jsx";
import Subtitle from "../../shared/subtitle/index.jsx";
import "./styles.scss";

const WelcomeUser = () => {
  /* eslint-disable import/prefer-default-export */
  const { gotoName } = useRouter();
  return (
    <div className="welcome">
      <h1 className="welcome welcome__title">The Best TV services around!</h1>
      <Subtitle text={"Are you ready to enjoy ultra-best service?"} />
      <Button onClick={gotoName} text={"let's do it"} />
    </div>
  );
};

export default WelcomeUser;
