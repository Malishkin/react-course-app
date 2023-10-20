import "./Costs.css";
import CostItem from "./CostItem";
import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import { useState } from "react";
const Costs = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="costs">
        <CostsFilter year={filteredYear} onChangeYear={yearChangeHandler} />;
        <CostItem
          date={props.costs[0].date}
          description={props.costs[0].description}
          amount={props.costs[0].amount}
        ></CostItem>
        <CostItem
          date={props.costs[1].date}
          description={props.costs[1].description}
          amount={props.costs[1].amount}
        ></CostItem>
        <CostItem
          date={props.costs[2].date}
          description={props.costs[2].description}
          amount={props.costs[2].amount}
        ></CostItem>
      </Card>
    </div>
  );
};

export default Costs;
