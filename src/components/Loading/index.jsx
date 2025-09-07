import styles from "./Loading.module.scss";

const LoadingData = () => {
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
			<div className={styles.loading}></div>
		</div>
	);
};
export default LoadingData;
