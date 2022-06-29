import React from "react";
import Welcome from "../components/welcomeUser/Welcome.jsx";
import NameUser from "../components/nameUser/NameUser.jsx";
import AddressUser from "../components/adressUser/AddressUser.jsx";
import SelectPlan from "../components/selectPlanUser/SelectPlan.jsx";
import ContactUser from "../components/contactUser/ContactUser.jsx";

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
