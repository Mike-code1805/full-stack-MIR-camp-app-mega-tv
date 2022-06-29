import React from "react";
import Button from "../../shared/button/index.jsx";
import Input from "../../shared/input/index.jsx";
import Subtitle from "../../shared/subtitle/index.jsx";
import "./styles.scss";

function NameUser() {
  return (
    <div className="nameUser">
      <Subtitle text={"Awesome! Let's get started with the basics"} />
      <Input text={"First name"} />
      <Input text={"LAST NAME"} />
      <Button text={"next"} />
    </div>
  );
}

export default NameUser;
