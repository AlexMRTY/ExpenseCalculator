import React from 'react';

import styles from './Total.module.css';

const Total = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                {/* <span>{props.data.date}</span>  Update later to dynamic. */}
                <span>FEBRUARY 12  .  {props.dataSummary.totalPaymentCount} PAYMENTS</span>
            </div>
            <div className={styles.total}>
                <span>€ {props.dataSummary.totalExpenses}</span>
            </div>
        </div>
    )
}

export default Total;