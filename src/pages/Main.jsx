import React from "react";
import AddressUser from "../components/adressUser/AddressUser.jsx";
import ContactUser from "../components/contactUser/ContactUser.jsx";
import NameUser from "../components/nameUser/NameUser.jsx";
import SelectPlan from "../components/selectPlan/SelectPlan.jsx";
import Welcome from "../components/welcome/Welcome.jsx";

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
