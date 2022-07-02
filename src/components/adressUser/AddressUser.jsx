/* eslint arrow-body-style: ["error", "always"] */
/* eslint no-underscore-dangle: 0 */
/* eslint-env es6 */

import React, { useContext } from "react";
import SelectSearch from "../../shared/select-search/index.jsx";
import Subtitle from "../../shared/subtitle/index.jsx";
import Input from "../../shared/input/index.jsx";

import Button from "../../shared/button/index.jsx";
import "./styles.scss";
import { useRouter } from "../../hooks/useRouter";
import UserContext from "../../context/UserContext";

function AddressUser() {
  const { gotoPlan } = useRouter();
  const context = useContext(UserContext);
  const handleClick = () => {
    console.log(context);
    gotoPlan();
  };

  const API =
    "https://raw.githubusercontent.com/khriztianmoreno/tv-services-challenge/main/assets/buildings.json";

  return (
    <div className="address-user">
      <Subtitle text={"Pleasure to meet you, USER!"} />
      <Subtitle text={"What is your install address?"} />
      <div className="address-user__select">
        <SelectSearch placeholder={"STREET, ADDRESS, CITY, STATE"} link={API} />
        <div className="address-user__select__input">
          <Input text={"apt#"} width={false} />
        </div>
      </div>
      <Button onClick={handleClick} text={"Yes!"} />
    </div>
  );
}

export default AddressUser;
