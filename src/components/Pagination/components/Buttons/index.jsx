import styles from "./Button.module.scss";

const Button = ({ children, page, onPageChange, isDisabled, number = 0 }) => {
	return (
		<button
			disabled={isDisabled}
			className={styles.btn}
			onClick={() => {
				onPageChange(page + number);
			}}
		>
			{children}
		</button>
	);
};
export default Button;
