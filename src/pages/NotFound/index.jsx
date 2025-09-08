import styles from "./NotFound.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

const NotFound = () => {
	return (
		<div className={styles.notFoundContainer}>
			<Header />
			<p className={styles.notFoundText}>NOT FOUND</p>
			<Footer />
		</div>
	);
};
export default NotFound;
