import React from "react";

function AdressUser() {
  return (
    <div>
      <h1> Pleasure to meet you, USER! </h1>
      <h1> What is your install adress? </h1>
      <input type="text" placeholder="STREET ADDRESS, CITY, STATE" />
      <input type="text" placeholder="APT #" />
      <h4>I can't find my address</h4>
      <button>YES!</button>
    </div>
  );
}

export default AdressUser;