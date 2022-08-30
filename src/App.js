import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Expenses from "./Components/Expenses/Expenses";
import AddExpense from "./Components/AddExpenses/AddExpense";
import Filter from "./Components/Filter/Filter";
import Header from "./Components/Filter/SubComponents/Header";
import Chart from "./Components/ExpenseChart/Chart";

import data from "./data";

import styles from "./App.module.css";

function App() {
  // Random ID generator
  const randomIdGenerator = () => {
    return uuidv4();
  };

  const [dataPoints, setDataPoints] = useState(data);

  // Filter
  const [openFilter, setOpenFilter] = useState(false);
  const handleFilterButtonClick = () => {
    openFilter ? setOpenFilter(false) : setOpenFilter(true);
  };

  // Filter value
  const [filterYear, setFilterYear] = useState("2022");
  const setFilterValue = (year) => {
    setFilterYear(year);
    setOpenFilter(false);
  };

  const [barInFocus, setBarInFocus] = useState("DEC");
  const handleChartBarClick = (value) => {
    setBarInFocus(value);
  };

  const filteredDataPoints = dataPoints.filter(
    (item) => item.date.getFullYear() === parseInt(filterYear)
  );
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const filteredDataPointsByMonth = filteredDataPoints.filter(
    (item) => item.date.getMonth() === months.indexOf(barInFocus)
  );

  // Calculate the sum of all Expenses
  const getTotalExpenses = (period) => {
    if (period === 'year') {
      let total = 0;
      filteredDataPoints.forEach((item) => {
        total += parseInt(item.price);
      });
      return total;
    } else {
      let total = 0;
      filteredDataPointsByMonth.forEach((item) => {
        total += parseInt(item.price);
      });
      return total;
    }
    
    
  };

  let dataSummary = {
    totalPaymentCount: filteredDataPointsByMonth.length,
    totalExpenses: getTotalExpenses('year'),
    totalExpensesByMonth: getTotalExpenses('month')
  };

  // Recieve new data from Form, and push to dataPoints.
  const handleNewFormData = (formData) => {
    const formDataWithID = {
      id: randomIdGenerator(),
      ...formData,
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
        <Chart
          filteredDataPoints={filteredDataPoints}
          dataSummary={dataSummary}
          selectedFilterYear={filterYear}
          barInFocus={barInFocus}
          setBarInFocus={handleChartBarClick}
        />
        <AddExpense passOnData={handleNewFormData} />
        <Expenses
          dataPoints={filteredDataPointsByMonth}
          dataSummary={dataSummary}
          barInFocus={barInFocus}
        />

      </div>
    </div>
  );
}

export default App;
