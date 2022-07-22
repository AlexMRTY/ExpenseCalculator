import React from "react";

import styles from "./Chart.module.css";

const Chart = () => {
  return (
    <div className={styles.container}>
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
        <div className={styles.chart_bar}>
          <div className={styles.bar}>
            <span className={`${styles.progress_bar} ${styles.on_focus}`}></span>
          </div>
          <span className={styles.month}>DEC</span>
          <span className={styles.year}>2022</span>
        </div>
        <div className={styles.chart_bar}>
          <div className={`${styles.bar} ${styles.on_focus}`}>
            <span className={styles.progress_bar}></span>
          </div>
          <span className={styles.month}>NOV</span>
          <span className={styles.year}>2022</span>

        </div>
        <div className={styles.chart_bar}>
          <div className={`${styles.bar} ${styles.on_focus}`}>
            <span className={styles.progress_bar}></span>
          </div>
          <span className={styles.month}>OCT</span>
          <span className={styles.year}>2022</span>
        </div>
      </div>
    </div>
  );
};

export default Chart;
