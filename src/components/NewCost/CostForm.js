import "./CostForm.css";
import React, { useState } from "react";

const CostForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredName: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  const nameChangeHandler = (event) => {
    // event.preventDefault();
    setEnteredName(event.target.value);

    // setUserInput({ ...userInput, enteredName: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredName: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    // event.preventDefault();
    setEnteredAmount(event.target.value);

    // setUserInput({ ...userInput, enteredAmount: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const dateChangeHandler = (event) => {
    // event.preventDefault();
    setEnteredDate(event.target.value);

    // setUserInput({ ...userInput, enteredDate: event.target.value });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const costData = {
      name: enteredName,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(costData);
    setEnteredName("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Название</label>
          <input type="text" onChange={nameChangeHandler} value={enteredName} />
        </div>
        <div className="new-cost__control">
          <label>Сумма</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>

        <div className="new-cost__actions">
          <button type="submit">Добавить расход</button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
