import React from 'react';
import styles from './HistoryView.module.css';
const HistoryView = () => {
    return (
        <div className={styles.historyView}>
            <h1 className={styles.pageTitle}>History</h1>
            <div className={styles.container}>
                <div className={styles.orderList}>
                    <div className={styles.heading}>
                        <span className={styles.headingText}>All</span>
                    </div>
                </div>
                <div className={styles.orderDetail}>

                </div>
            </div>
        </div>
    )
}
export default HistoryView;