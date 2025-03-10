import styles from "./navbar.module.css"; 

const Navbar = () => {
	return (
		<div className={styles.navbar}>
			<div className={styles.logo}>
				Logo
			</div>
			<div className={styles.contents}>
				<div className={styles.content}>Home</div>
				<div className={styles.content}>About</div>
				<div className={styles.content}>Contact Us</div>
			</div>
			<div className={styles.content}>
				Login
			</div>	
		</div>
	)
}
export default Navbar
