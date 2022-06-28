import React from "react";
import AdressUser from "../components/AdressUser.jsx";
import ContactUser from "../components/ContactUser.jsx";
import NameUser from "../components/NameUser.jsx";
import SelectPlan from "../components/SelectPlan.jsx";
import Welcome from "../components/Welcome.jsx";


function Main()  {
  return (
    <div>
      <Welcome />
      <NameUser />
      <AdressUser />
      <SelectPlan />
      <ContactUser />
    </div>
  );
};

export default Main;
