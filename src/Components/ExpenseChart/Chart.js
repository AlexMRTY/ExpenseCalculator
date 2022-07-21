import React from "react";

import styles from "./Chart.module.css";

const Chart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chart_container}>
        <div className={styles.chart_lines_container}>
          <div className={styles.chart_line}>
            <span className={styles.label}>1.5K</span>
            <span className={styles.line}></span>
          </div>
          <div className={styles.chart_line}>
            <span className={styles.label}>1K</span>
            <span className={styles.line}></span>
          </div>
          <div className={styles.chart_line}>
            <span className={styles.label}>0.5K</span>
            <div className={styles.line}></div>
          </div>
        </div>

        <div className={styles.chart_bar_container}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
