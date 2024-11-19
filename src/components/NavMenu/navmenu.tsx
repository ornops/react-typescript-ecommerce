import React from 'react'
import styles from './navmenu-styles.module.scss'
// import { Link } from 'react-router-dom'

const NavMenu: React.FC = () => {
	return (
		<div className={styles.navContainer}>
			<ul className={styles.navListContainer}>
				<li>All Items</li>
				<li>Men</li>
				<li>Women</li>
			</ul>
		</div>
	)
}

export default NavMenu
