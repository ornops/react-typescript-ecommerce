import React from 'react'
import styles from './searchbar.module.scss'
import { CiSearch } from "react-icons/ci";



const SearchBar: React.FC = () => {
	return (
		<div className={styles.searchBarContainer}>
			<div className={styles.searchFieldContainer}>
				<div className={styles.iconContainer}>
					<CiSearch size={30} />
				</div>
				<div className={styles.inputContainer}>
					<input type="text" className={styles.inputBox} placeholder='Search' />
				</div>
			</div>
		</div>
	)
}

export default SearchBar
