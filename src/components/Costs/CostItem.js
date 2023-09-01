import React, { useState } from "react";
import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
const CostItem = (props) => {
  const [description, setDescription] = useState(props.description);
  const changeDescriptionHandler = () => {
    setDescription("Updated!");
  };
  return (
    <Card className="cost-item">
      <CostDate date={props.date}></CostDate>
      <div className="cost-item__description">
        <h2>{description}</h2>
        <div className="cost-item__price">${props.amount}</div>
      </div>
      <button onClick={changeDescriptionHandler}>Изменть описание</button>
    </Card>
  );
};

export default CostItem;
