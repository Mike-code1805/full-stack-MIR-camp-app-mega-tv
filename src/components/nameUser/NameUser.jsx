import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useCustomFormik } from "../../hooks/useCustomFormik";
import { useRouter } from "../../hooks/useRouter";
import Button from "../../shared/button/index.jsx";
import Input from "../../shared/input/index.jsx";
import Subtitle from "../../shared/subtitle/index.jsx";
import "./styles.scss";

function NameUser() {
  const { gotoAddress } = useRouter();
  const { createUser } = useContext(UserContext);
  const formik = useCustomFormik({ name: "", lastname: "" }, () => {
    createFormUser();
  });

  const createFormUser = () => {
    createUser({
      name: formik.values.name,
      lastname: formik.values.lastname
    });
  };

  const handleClick = () => {
    formik.handleSubmit();
    gotoAddress();
  };

  return (
    <div className="nameUser">
      <Subtitle text={"Awesome! Let's get started with the basics"} />
      <Input
        name={"name"}
        value={formik.values.name}
        text={"First name"}
        onChange={formik.handleChange}
      />
      <Input
        name={"lastname"}
        value={formik.values.lastname}
        text={"Last name"}
        onChange={formik.handleChange}
      />
      <Button onClick={handleClick} text={"next"} type="button" />
    </div>
  );
}

export default NameUser;
