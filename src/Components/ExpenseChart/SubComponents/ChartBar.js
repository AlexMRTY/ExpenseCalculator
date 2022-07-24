import React from "react";

import styles from "./ChartBar.module.css";

const ChartBar = ({
  barInFocus,
  setBarInFocus,
  selectedFilterYear,
  filteredDataPoints,
  total,
  passOnMonthlyExpenses,
  monthlyExpense,
  months,
}) => {
  // Calculating Bar height for each month.
  
  
  const barHeight = {};
  
  Object.keys(monthlyExpense).forEach((item) => {
    barHeight[item] =
      ((monthlyExpense[item] / total) * 100).toFixed(0).toString() + "%";
  });

  // passOnMonthlyExpenses(monthlyExpense);

  const newMonths = [...months]
  return (
    <div className={styles.chart_bar_container}>
      {newMonths.reverse().map((m, i) => (
        <div
          className={`
          ${styles.chart_bar} 
          ${i + 1 === newMonths.length && styles.last_bar}
          `}
          onClick={() => {
            setBarInFocus(m);
          }}
          key={m}
        >
          <div className={styles.bar}>
            <span
              className={`
                    ${styles.progress_bar} 
                    ${barInFocus === m && styles.on_focus}
                    `}
              style={{ height: barHeight[m] }}
            ></span>
          </div>
          <span className={styles.month}>{m}</span>
          <span className={styles.year}>{selectedFilterYear}</span>
        </div>
      ))}
      ;
    </div>
  );
};

export default ChartBar;
