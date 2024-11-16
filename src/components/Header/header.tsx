import React from 'react'
import styles from './header.module.scss'
import SearchBar from '../SearchBar/searchbar'

const Header: React.FC = () => {
	return (
		<div className={styles.header} >
			<h1>Header</h1>
			<SearchBar />
		</div>
	)
}

export default Header
