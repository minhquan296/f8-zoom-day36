import { Link } from "react-router-dom";
import styles from "./AdminSidebar.module.scss";

const AdminSidebar = () => {
	return (
		<ul className={styles.sidebar}>
			<li>
				<Link to="/admin">Dasboard</Link>
			</li>
			<li>
				<Link to="/admin/users">Users</Link>
			</li>
			<li>
				<Link to="/admin/settings">Settings</Link>
			</li>
		</ul>
	);
};
export default AdminSidebar;
