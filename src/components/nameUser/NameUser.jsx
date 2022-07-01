import React from "react";
import { useRouter } from "../../hooks/useRouter";
import Button from "../../shared/button/index.jsx";
import Input from "../../shared/input/index.jsx";
import Subtitle from "../../shared/subtitle/index.jsx";
import "./styles.scss";

function NameUser() {
  const {gotoAddress} = useRouter();
  return (
    <div className="nameUser">
      <Subtitle text={"Awesome! Let's get started with the basics"} />
      <Input text={"First name"} />
      <Input text={"LAST NAME"} />
      <Button onClick={gotoAddress} text={"next"} />
    </div>
  );
}

export default NameUser;
