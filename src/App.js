import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Expenses from "./Components/Expenses/Expenses";
import AddExpense from "./Components/AddExpenses/AddExpense";
import Filter from "./Components/Filter/Filter";
import Header from "./Components/Filter/SubComponents/Header";
import Chart from "./Components/ExpenseChart/Chart";

import styles from "./App.module.css";

function App() {
  // Random ID generator
  const randomIdGenerator = () => {
    return uuidv4();
  };

  const [dataPoints, setDataPoints] = useState([
    {
      id: randomIdGenerator(),
      date: new Date("2019-10-11"),
      category: "Shopping",
      price: "300",
    },
    {
      id: randomIdGenerator(),
      date: new Date("2020-10-11"),
      category: "Travel",
      price: "500",
    },
    {
      id: randomIdGenerator(),
      date: new Date("2021-10-11"),
      category: "Food",
      price: "120",
    },
    {
      id: randomIdGenerator(),
      date: new Date("2022-10-11"),
      category: "Gym",
      price: "600",
    },
    {
      id: randomIdGenerator(),
      date: new Date("2022-11-11"),
      category: "Shopping",
      price: "50",
    },
    {
      id: randomIdGenerator(),
      date: new Date("2022-11-12"),
      category: "Travel",
      price: "600",
    },
    {
      id: randomIdGenerator(),
      date: new Date("2022-11-02"),
      category: "Food",
      price: "100",
    },
  ]);

  // Filter
  const [openFilter, setOpenFilter] = useState(false);
  const handleFilterButtonClick = () => {
    openFilter ? setOpenFilter(false) : setOpenFilter(true);
  };

  // Filter value
  const [filterYear, setFilterYear] = useState('2022')
  const setFilterValue = (year) => {
    setFilterYear(year)
    setOpenFilter(false)
  }

  const filteredDataPoints = dataPoints.filter(item => item.date.getFullYear() === parseInt(filterYear))

  
  // Calculate the sum of all Expenses
  const getTotalExpenses = () => {
    let total = 0;
    filteredDataPoints.forEach((item) => {
      total += parseInt(item.price);
    });

    return total;
  };

  let dataSummary = {
    totalPaymentCount: filteredDataPoints.length,
    totalExpenses: getTotalExpenses(),
  };

  // Recieve new data from Form, and push to dataPoints.
  const handleNewFormData = (formData) => {
    const formDataWithID = {
      ...formData,
      id: randomIdGenerator(),
    };
    const newFormData = [...dataPoints, formDataWithID];
    setDataPoints(newFormData);
  };

  

  


  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <Header
          title="Expenses"
          handleFilterButtonClick={handleFilterButtonClick}
        />
        {openFilter ? (
          <Filter
            openFilter={setOpenFilter}
            handleFilterButtonClick={handleFilterButtonClick}
            selectedFilterYear={filterYear}
            setFilterValue={setFilterValue}
          />
        ) : (
          // Returns nothing if Button is not clicked
          <div></div>
        )}
        <Chart />
        <AddExpense passOnData={handleNewFormData} />
        <Expenses dataPoints={filteredDataPoints} dataSummary={dataSummary} />
      </div>

      
    </div>
  );
}

export default App;
