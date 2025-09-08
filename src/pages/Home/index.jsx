import Navigation from "../../components/Navigation";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div>
			<div className={styles.homeContainer}>
				<span className={styles.title}>Home</span>
			</div>
			<Navigation />
		</div>
	);
};
export default Home;
