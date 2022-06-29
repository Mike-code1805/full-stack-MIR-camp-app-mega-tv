import React from "react";
import Subtitle from "../../shared/subtitle/index.jsx";
import Input from "../../shared/input/index.jsx";
import Button from "../../shared/button/index.jsx";
import "./styles.scss";

function ContactUser() {
  return (
    <div className="contact-user">
      <Subtitle text={"Great news! Your first month's free!"}/>
      <h4 className="contact-user__h4">
        To get set up, just provide your email and phone number and we can
        remind you when the free trial ends.
      </h4>
      <Input type={"email"} text ={"email"} />
      <Input text ={"PHONE NUMBER"}/>
      <h4>I can't find my address</h4>
      <Button text ={"suscribe now!"}/>
    </div>
  );
}

export default ContactUser;
