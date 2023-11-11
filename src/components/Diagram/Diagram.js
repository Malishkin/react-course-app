import "./Diagram.css";

import DiagramBar from "./DiagramBar";

const Diagram = (props) => {
  const maxMonthCost = Math.max(
    ...props.dataSets.map((dataSet) => dataSet.value)
  );
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={maxMonthCost}
          label={dataSet.label}
        />
      ))}
    </div>
  );
};

export default Diagram;
