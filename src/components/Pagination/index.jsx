import styles from "./Pagination.module.scss";

const Pagination = ({ currentPage, totalPages, onPageChange, page }) => {
	return (
		<div>
			<div className={styles.actionBtn}>
				<button
					className={styles.btn}
					onClick={() => {
						onPageChange(page - 1);
					}}
				>
					Prev
				</button>
				<button
					className={styles.btn}
					onClick={() => {
						onPageChange(page + 1);
					}}
				>
					Next
				</button>
			</div>
			<div className={styles.pages}>
				{Array(totalPages)
					.fill(null)
					.map((_, index) => {
						return (
							<div
								className={`${styles.page} ${currentPage === index + 1 ? styles.active : ""}`}
								key={index}
								onClick={() => {
									onPageChange(index + 1);
								}}
							>
								{index + 1}
							</div>
						);
					})}
			</div>
		</div>
	);
};
export default Pagination;
