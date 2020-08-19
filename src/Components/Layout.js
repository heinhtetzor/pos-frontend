import React from 'react';
import Header from './Header';
import styles from './global.module.css';
const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.content}> 
          {children}
        </div>
        <footer className={styles.footer}>
          Created by Lada!
        </footer>
    </div>
   
  )
}
export default Layout;
