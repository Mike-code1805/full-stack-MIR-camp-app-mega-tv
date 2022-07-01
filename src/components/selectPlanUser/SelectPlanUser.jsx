import React from "react";
import { useRouter } from "../../hooks/useRouter";
import Container from "../../shared/container/index.jsx";
import Button from "../../shared/button/index.jsx";
import "./styles.scss";
import Subtitle from "../../shared/subtitle/index.jsx";

function SelectPlanUser() {
  const {gotoContact} = useRouter();

  return (
    <div className = "selectPlan">
      <Subtitle text = {"Please select the TV plan you want to enjoy:"} />
      <div className = "selectPlan__container">
        <Container plan={'Basic'} price={30} />
        <Container plan={'Premium'} price ={50}/>
      </div>
      <Button onClick={gotoContact} text={'I am READY!'}/>
    </div>
  );
}

export default SelectPlanUser;
