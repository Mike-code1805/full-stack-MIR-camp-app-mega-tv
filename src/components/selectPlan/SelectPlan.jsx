import React from "react";
import Container from "../../shared/container/index.jsx";
import Button from "../../shared/button/index.jsx";
import "./styles.scss";
import Subtitle from "../../shared/subtitle/index.jsx";

function SelectPlan() {
  return (
    <div className = "selectPlan">
      <Subtitle text = {"Please select the TV plan you want to enjoy:"} />
      <div className = "selectPlan__container">
        <Container plan={'Basic'} price={30} />
        <Container plan={'Premium'} price ={50}/>
      </div>
      <Button text={'I am READY!'}/>
    </div>
  );
}

export default SelectPlan;
