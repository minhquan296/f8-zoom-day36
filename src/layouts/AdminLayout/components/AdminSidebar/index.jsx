import { Link } from "react-router-dom";

const AdminSidebar = () => {
	return (
		<ul>
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
