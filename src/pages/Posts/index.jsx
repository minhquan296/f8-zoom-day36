import { useCallback, useEffect, useState } from "react";
import LoadingData from "../../components/Loading";
import { Link, useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination";

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

	useEffect(() => {
		if (page > 5) {
			onPageChange(1);
		}
		if (page <= 0) {
			onPageChange(5);
		}
	}, [page, setSearchParams, onPageChange]);

	if (!posts.length) return <LoadingData />;

	return (
		<div style={{ padding: "10px" }}>
			{posts.map((post) => {
				return (
					<Link to={`/posts/${post.id}`} key={post.id}>
						{post.title}
						<br />
					</Link>
				);
			})}

			<Pagination currentPage={page} totalPages={5} onPageChange={onPageChange} page={page} />
		</div>
	);
};
export default Posts;
