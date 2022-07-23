import React, { useState } from "react";

import Total from "./SubComponents/Total";
// import Tabs from "./SubComponents/Tabs";
import Categories from "./SubComponents/Categories";
import AllPayments from "./SubComponents/AllPayments";
import Card from "../UI/Card";

import styles from "./Expenses.module.css";

const Expenses = (props) => {
  // Structuring data for the expense list component.
  const paymentCount = {};
  const costByCategory = {};
  const percentageForCategory = {};
  const categorizedData = [];
  props.dataPoints.forEach((item) => {
    // Create clean duplicate free data ready to pass to expense list.
    if (!(item.category in paymentCount)) {
      categorizedData.push(item);
    }

    // Calculate duplicate count for each categories.
    paymentCount[item.category] = (paymentCount[item.category] || 0) + 1;

    // Add up prices which belong in the same category.
    costByCategory[item.category] =
      (parseInt(costByCategory[item.category]) || 0) + parseInt(item.price);
    // dataSummary.total += item.price;
  });

  props.dataPoints.forEach((item) => {
    // Calculate percentage of total expenses for each category.
    percentageForCategory[item.category] = (
      (costByCategory[item.category] / props.dataSummary.totalExpensesByMonth || 0) *
      100
    ).toFixed(2);
  });

  // Expense list tabs.
  const [activeTab, setActiveTab] = useState("categories");

  return (
    <Card>
      <Total dataSummary={props.dataSummary} barInFocus={props.barInFocus}/>
      <div className={styles.buttons_container}>
        <button
          className={`
          ${styles.button} 
          ${"all payments" === activeTab && styles.on_focus}`
          }
          value="all payments"
          onClick={(e) => {
            setActiveTab(e.target.value)
          }}
        >
          All Payments
        </button>
        <button
          className={`
          ${styles.button} 
          ${"categories" === activeTab && styles.on_focus}`
          }
          value="categories"
          onClick={(e) => {
            setActiveTab(e.target.value)
          }}
        >
        Categories
        </button>
      </div>
      {activeTab === 'categories' && 
      <Categories
        categorizedData={categorizedData}
        costByCategory={costByCategory}
        paymentCount={paymentCount}
        percentageForCategory={percentageForCategory}
      />}

      {activeTab === 'all payments' && 
      <AllPayments
        dataPoints={props.dataPoints}
        dataSummary={props.dataSummary}
      />}
    </Card>
  );
};

export default Expenses;
