import { Link } from "react-router-dom";

import styles from "./Navigation.module.scss";

const Navigation = () => {
	return (
		<ul className={styles.container}>
			<li>
				<Link to={"/"}>Home</Link>
			</li>
			<li>
				<Link to={"/posts"}>Posts</Link>
			</li>
			<li>
				<Link to={"/about"}>About</Link>
			</li>
			<li>
				<Link to={"/admin"}>Dashboard</Link>
			</li>
		</ul>
	);
};
export default Navigation;
