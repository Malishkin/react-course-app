import React from "react";
import CostItem from "./components/CostItem";
function App() {
  const costs = [
    {
      id: 1,
      date: new Date(2021, 2, 12),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      id: 2,
      date: new Date(2021, 11, 25),
      description: "MacBook",
      amount: 1254.72,
    },
    {
      id: 3,
      date: new Date(2021, 3, 1),
      description: "Джинсы",
      amount: 49.99,
    },
  ];
  return (
    <div>
      <h1>Калькулятор расходов</h1>
      <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem
        date={costs[1].date}
        description={costs[1].description}
        amount={costs[1].amount}
      ></CostItem>
      <CostItem
        date={costs[2].date}
        description={costs[2].description}
        amount={costs[2].amount}
      ></CostItem>
    </div>
  );
}

export default App;
