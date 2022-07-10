import React from 'react';

import styles from './Total.module.css';

const Total = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.date}>
                <span>{props.data.date}</span>  {/* Update later to dynamic. */}
            </div>
            <div className={styles.total}>
                <span>€ {props.data.total}</span>
            </div>
        </div>
    )
}

export default Total;