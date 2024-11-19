import React from 'react'
import logo from '../../images/shopping bag.png'
import styles from './logo-style.module.scss'

const LogoComponent: React.FC = () => {
	return (
		<div className={styles.logoContainer}>
			<img src={logo} alt="Logo" className={styles.logoImage} />
		</div>
	)
}

export default LogoComponent
