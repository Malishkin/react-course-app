import "./CostList.css";

import CostItem from "./CostItem";

const CostList = (props) => {
  let costsContent = (
    <h2 className="cost-list__fallback">Нет расходов за выбранный период</h2>
  );
  if (props.costs.length > 0) {
    costsContent = props.costs.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      ></CostItem>
    ));
  }
  return <ul className="cost-list">{costsContent}</ul>;
};

export default CostList;
