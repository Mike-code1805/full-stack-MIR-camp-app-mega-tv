import React from "react";
import Welcome from "../welcomeUser/Welcome.jsx";
import NameUser from "../nameUser/NameUser.jsx";
import AddressUser from "../adressUser/AddressUser.jsx";
import SelectPlan from "../selectPlanUser/SelectPlan.jsx";
import ContactUser from "../contactUser/ContactUser.jsx";

function Main() {
  return (
    <div>
      <Welcome />
      <NameUser />
      <AddressUser />
      <SelectPlan />
      <ContactUser />
    </div>
  );
}

export default Main;
