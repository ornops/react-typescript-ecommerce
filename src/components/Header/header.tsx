import React from 'react'
import styles from './header.module.scss'
import SearchBar from '../SearchBar/searchbar'
import LogoComponent from '../Logo/logo-component'

const Header: React.FC = () => {
	return (
		<div className={styles.header} >
			<LogoComponent />
			<SearchBar />
		</div>
	)
}

export default Header
