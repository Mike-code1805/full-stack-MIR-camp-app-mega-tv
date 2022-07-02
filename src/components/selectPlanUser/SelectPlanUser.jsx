import React, { useContext, useState } from "react";
import { useRouter } from "../../hooks/useRouter";
import Container from "../../shared/container/index.jsx";
import Button from "../../shared/button/index.jsx";
import "./styles.scss";
import Subtitle from "../../shared/subtitle/index.jsx";
import UserContext from "../../context/UserContext";
import { useCustomFormik } from "../../hooks/useCustomFormik";

function SelectPlanUser() {
  const { gotoContact } = useRouter();
  const { user, updateUser } = useContext(UserContext);
  const [planUser, setPlanUser] = useState();

  const createFormUser = () => {
    updateUser({
      id: user[0].id,
      name: user[0].name,
      lastname: user[0].lastname,
      plan: planUser,
      email: user[0].email,
      phone: user[0].phone,
      address: user[0].address,
      nroApart: user[0].nroApart
    });
  };
  const formik = useCustomFormik({}, () => {
    createFormUser();
  });
  const handleClick = () => {
    formik.handleSubmit();
    gotoContact();
  };
  return (
    <div className="selectPlan">
      <Subtitle text={"Please select the TV plan you want to enjoy:"} />
      <div className="selectPlan__container">
        <Container
          onClick={() => setPlanUser("Basic")}
          plan={"Basic"}
          price={30}
        />
        <Container
          onClick={() => setPlanUser("Premium")}
          plan={"Premium"}
          price={50}
        />
      </div>
      <Button onClick={handleClick} text={"I am READY!"} type={"button"} />
    </div>
  );
}

export default SelectPlanUser;
