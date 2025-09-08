import Button from "./components/Buttons";
import styles from "./Pagination.module.scss";

const Pagination = ({ firstPage, currentPage, totalPages, onPageChange, page }) => {
	return (
		<div
			style={{
				width: "100%",
			}}
		>
			<div className={styles.btnWrap}>
				<Button page={firstPage} onPageChange={onPageChange} isDisabled={page === firstPage}>
					First
				</Button>

				<Button page={totalPages} onPageChange={onPageChange} isDisabled={page === totalPages}>
					Last
				</Button>
			</div>

			<div>
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

				{/* <div className={styles.btnWrap}></div> */}
			</div>

			<div className={styles.actionBtn}>
				<Button page={page} onPageChange={onPageChange} isDisabled={page === firstPage} number={-1}>
					Prev
				</Button>

				<Button page={page} onPageChange={onPageChange} isDisabled={page === totalPages} number={1}>
					Next
				</Button>
			</div>
		</div>
	);
};
export default Pagination;
