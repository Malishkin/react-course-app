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
        {props.costs.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          ></CostItem>
        ))}
        ;
      </Card>
    </div>
  );
};

export default Costs;
