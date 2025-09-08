import { useCallback, useEffect, useState } from "react";
import LoadingData from "../../components/Loading";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination";
import styles from "./Posts.module.scss";

const Posts = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(+searchParams.get("page") || 1);

	const onPageChange = useCallback(
		(number) => {
			setPage(number);
			setSearchParams(`?page=${number}`);
		},
		[setSearchParams]
	);

	useEffect(() => {
		const handlePostData = async () => {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_page=${page}`);
			const data = await res.json();
			if (data.length) {
				return setPosts(data);
			}
		};
		handlePostData();
	}, [page]);

	if (!posts.length) return <LoadingData />;

	return (
		<div className={styles.container}>
			<div className={styles["post-list"]}>
				{posts.map((post) => {
					return (
						<Link to={`/posts/${post.id}`} key={post.id}>
							{post.title}
							<br />
						</Link>
					);
				})}

				<div className={styles.pagination}>
					<Pagination
						firstPage={1}
						currentPage={page}
						totalPages={5}
						onPageChange={onPageChange}
						page={page}
					/>
				</div>
			</div>
		</div>
	);
};
export default Posts;
