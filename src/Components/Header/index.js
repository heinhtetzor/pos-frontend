import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
const Header = () => {
	return ( 
		<div className={styles.header}>
        	<div className={styles.title}>
				<Link to="/">Point of Sale</Link>
			</div>
        	<ul className={styles.links}>
        		<li>
					<Link to="/history">History</Link>
				</li>
        	</ul>

        </div>
       )
}
export default Header;