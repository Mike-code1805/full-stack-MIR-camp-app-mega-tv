/* eslint arrow-body-style: ["error", "always"] */
/* eslint no-underscore-dangle: 0 */
/* eslint-env es6 */

import React, { useContext, useState } from "react";
import SelectSearch from "../../shared/select-search/index.jsx";
import Subtitle from "../../shared/subtitle/index.jsx";
import Input from "../../shared/input/index.jsx";

import Button from "../../shared/button/index.jsx";
import "./styles.scss";
import { useRouter } from "../../hooks/useRouter";
import UserContext from "../../context/UserContext";
import { useCustomFormik } from "../../hooks/useCustomFormik";

function AddressUser() {
  const { gotoPlan } = useRouter();
  const [nroApartInput, setNroApartInput] = useState("");
  const {user, updateUser} = useContext(UserContext);
  const handleClick = () => {
    formik.handleSubmit();
    gotoPlan();
  };

  
  const formik = useCustomFormik({}, () => {
    createFormUser();
  });

  const createFormUser = () => {
    updateUser({
      id: user[0].id,
      name: user[0].name,
      lastname: user[0].lastname,
      plan: user[0].plan,
      email: user[0].email,
      phone: user[0].phone,
      address: user[0].address,
      nroApart: nroApartInput
    });
  };

  const API =
    "https://raw.githubusercontent.com/khriztianmoreno/tv-services-challenge/main/assets/buildings.json";

  return (
    <div className="address-user">
      <Subtitle text={"Pleasure to meet you, USER!"} />
      <Subtitle text={"What is your install address?"} />
      <div className="address-user__select">
        <SelectSearch nroApartText={nroApartInput} placeholder={"STREET, ADDRESS, CITY, STATE"} link={API} />
        <div className="address-user__select__input">
          <Input
            onChange={(e) => {
              setNroApartInput(e.target.value);
            }}
            text={"apt#"}
            width={false}
          />
        </div>
      </div>
      <Button onClick={handleClick} text={"Yes!"} type={"button"} />
    </div>
  );
}

export default AddressUser;
