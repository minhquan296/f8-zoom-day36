import { Outlet } from "react-router-dom";
import Header from "../components/header";
import AuthSidebar from "./components/AuthSidebar";

const AuthLayout = () => {
	return (
		<>
			<Header />
			<AuthSidebar />
			<Outlet />
		</>
	);
};
export default AuthLayout;
