import Navigation from "../../components/Navigation";
import styles from "./Home.module.scss";

const Home = () => {
	return (
		<div>
			<div className={styles.homeContainer}>
				<h1 className={styles.title}>Home</h1>
			</div>
			<Navigation />
		</div>
	);
};
export default Home;
