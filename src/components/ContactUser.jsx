import React from "react";

function ContactUser() {
  return (
    <div>
      <h1>Great news! Your first month's free!</h1>
      <h3>
        To get set up, just provide your email and phone number and we can
        remind you when the free trial ends.
      </h3>
      <input type="text" placeholder="EMAIL" />
      <input type="text" placeholder="PHONE NUMBER" />
      <h4>I can't find my address</h4>
      <button>SUBSCRIBE NOW!</button>
    </div>
  );
}

export default ContactUser;
