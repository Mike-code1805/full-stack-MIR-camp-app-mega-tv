import React from "react";
import Subtitle from "../../shared/subtitle/index.jsx";
import Input from "../../shared/input/index.jsx";
import "./styles.scss";

function AddressUser() {
  return (
    <div className="address-user">
      <Subtitle text={"Pleasure to meet you, USER!"} />
      <Subtitle text={"What is your install adress?"} />
      <div className="address-user__inputs">
        <Input width={false} text={"APT #"} />
      </div>
      <h4>I can't find my address</h4>
    </div>
  );
}

export default AddressUser;
