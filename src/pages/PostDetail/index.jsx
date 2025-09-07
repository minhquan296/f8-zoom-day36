import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingData from "../../components/Loading";
import styles from "./PostDetail.module.scss";

const PostDetail = () => {
	const [postDetail, setPostDetail] = useState({});
	const [comments, setComments] = useState([]);
	const param = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchPostDetail = async () => {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${param.id}`);
			if (res.status === 404) {
				return navigate("/posts", { replace: true });
			}
			const data = await res.json();
			setPostDetail(data);
		};

		fetchPostDetail();
	}, [param.id, navigate]);

	useEffect(() => {
		const fetchComments = async () => {
			const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${param.id}/comments`);
			const data = await res.json();
			setComments(data);
		};

		fetchComments();
	}, [param.id]);

	if (!postDetail.id && !comments.length) return <LoadingData />;

	return (
		<div className={styles.container}>
			<p>id: {postDetail.id}</p>
			<p>title: {postDetail.title}</p>
			<p>body: {postDetail.body}</p>

			<div className={styles.comments}>
				<h1>Comment</h1>
				{comments.map((comment) => {
					return (
						<div key={comment.id} className={styles.comment}>
							<p>{comment.name}</p>
							<p>{comment.email}</p>
							<p>{comment.body}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default PostDetail;
