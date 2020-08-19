import React from 'react';
import styles from './ClearTooltip.module.css';
const ClearToolTip = ({ isOpen, onClearCart, onClose }) => {
    if(!isOpen) return null;
    return (
        <div className={styles.clearTooltip}>
            <span>Are you sure?</span>
            <span className={styles.confirmBtn}
                onClick={() => {
                    onClose();
                }}>NO</span>
            <span className={styles.confirmBtn}
                onClick={() => {
                    onClearCart();
                    onClose();
                }}>YES</span>
        </div>
    )
}
export default ClearToolTip;