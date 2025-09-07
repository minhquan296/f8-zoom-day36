import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "./components/Footer";

const DefaultLayout = () => {
	return (
		<div>
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
export default DefaultLayout;
