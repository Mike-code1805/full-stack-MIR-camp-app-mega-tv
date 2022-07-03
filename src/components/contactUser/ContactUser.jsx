import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import Subtitle from "../../shared/subtitle/index.jsx";
import Input from "../../shared/input/index.jsx";
import Button from "../../shared/button/index.jsx";
import "./styles.scss";
import UserContext from "../../context/UserContext";
import { useCustomFormik } from "../../hooks/useCustomFormik";
import { useRouter } from "../../hooks/useRouter";
import { createService } from "../services/createService";

function ContactUser() {
  const { gotoThanks } = useRouter();
  const { user, updateUser } = useContext(UserContext);
  const [emailUser, setEmailUser] = useState();
  const [phoneUser, setPhoneUser] = useState();

  const createFormUser = () => {
    updateUser({
      id: user[0].id,
      name: user[0].name,
      lastname: user[0].lastname,
      plan: user[0].plan,
      email: emailUser,
      phone: phoneUser,
      address: user[0].address,
      nroApart: user[0].nroApart
    });
  };

  const formik = useCustomFormik({}, () => {
    createFormUser();
  });

  const handleClick = () => {
    formik.handleSubmit();
    createService(
      {
        name: user[0].name,
        lastname: user[0].lastname,
        plan: user[0].plan,
        email: user[0].email,
        phone: user[0].phone,
        address: user[0].address,
        nroApart: user[0].nroApart
      },
      (response) => {
        if (response.status === "success") {
          gotoThanks();
        } else {
          Swal.fire("Credentials", response.error, "error");
        }
      }
    );
  };

  return (
    <div className="contact-user">
      <Subtitle text={"Great news! Your first month's free!"} />
      <h4 className="contact-user__h4">
        To get set up, just provide your email and phone number and we can
        remind you when the free trial ends.
      </h4>
      <Input
        value={formik.values.email}
        type={"email"}
        text={"email"}
        name={"email"}
        onChange={(e) => {
          setEmailUser(e.target.value);
        }}
      />
      <Input
        value={formik.values.phone}
        text={"PHONE NUMBER"}
        type={"text"}
        name={"phone"}
        onChange={(e) => {
          setPhoneUser(e.target.value);
        }}
      />
      <h4>I can't find my address</h4>
      <Button onClick={handleClick} text={"suscribe now!"} type={"button"} />
    </div>
  );
}

export default ContactUser;
