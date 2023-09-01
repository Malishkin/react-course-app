import React from "react";

import Costs from "./components/Costs/Costs";

const App = () => {
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
      <h1>Начнём изучение React!</h1>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
