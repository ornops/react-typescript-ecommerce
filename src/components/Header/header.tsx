import React from 'react'
import styles from './header.module.scss'
import SearchBar from '../SearchBar/searchbar'
import LogoComponent from '../Logo/logo-component'
import NavMenu from '../NavMenu/navmenu'

const Header: React.FC = () => {
	return (
		<div className={styles.header} >
			<LogoComponent />
			<NavMenu />
			<SearchBar />
		</div>
	)
}

export default Header
