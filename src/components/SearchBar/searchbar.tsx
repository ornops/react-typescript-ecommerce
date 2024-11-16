import React from 'react'
import styles from './searchbar.module.scss'

const SearchBar = () => {
	return (
		<div className={styles.searchBarContainer}>
			<form action="">
				<input type="text" />
				<input type="submit" value="Search" />
			</form>
		</div>
	)
}

export default SearchBar
