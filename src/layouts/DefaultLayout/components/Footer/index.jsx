import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerWrapper}>
				<Link to="/contact">Contact</Link>
				<Link to="/privacy">Privacy</Link>
			</div>
		</footer>
	);
};
export default Footer;
