import React, { useState } from "react";

import styles from "./Chart.module.css";
import ChartBar from "./SubComponents/ChartBar";

const Chart = ({
  barInFocus,
  setBarInFocus,
  selectedFilterYear,
  filteredDataPoints,
  dataSummary,
}) => {

  const [highestMonthlyExpense, setHighestMonthlyExpense] = useState(0)
  const getMontlyExpenses = (data) => {
    let values = Object.values(data)
    setHighestMonthlyExpense(Math.max(...values)*1.1)
  }

  

  return (
    <div className={styles.container}>
      <div className={styles.chart_lines_container}>
        <div className={styles.chart_line}>
          <span className={styles.label}>{(highestMonthlyExpense / 1000).toFixed(1)}K</span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.chart_line}>
          <span className={styles.label}>{((highestMonthlyExpense*0.66) / 1000).toFixed(1)}K</span>
          <span className={styles.line}></span>
        </div>
        <div className={styles.chart_line}>
          <span className={styles.label}>{((highestMonthlyExpense*0.33) / 1000).toFixed(1)}K</span>
          <div className={`${styles.line} ${styles.last_line}`}></div>
        </div>
      </div>

      <ChartBar
        filteredDataPoints={filteredDataPoints}
        selectedFilterYear={selectedFilterYear}
        barInFocus={barInFocus}
        setBarInFocus={setBarInFocus}
        total={highestMonthlyExpense}
        passOnMonthlyExpenses={getMontlyExpenses}
      />
    </div>
  );
};

export default Chart;
