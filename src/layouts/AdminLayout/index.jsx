import { Outlet } from "react-router-dom";
import Header from "./components/AdminHeader";
import Footer from "./components/AdminFooter";
import AdminSidebar from "./components/AdminSidebar";

const AdminLayout = () => {
	return (
		<div>
			<Header />
			<AdminSidebar />
			<Outlet />
			<Footer />
		</div>
	);
};
export default AdminLayout;
