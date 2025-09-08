import { Outlet } from "react-router-dom";
import Navigation from "../../components/Navigation";

const SomeLayout = () => {
	return (
		<>
			<Outlet />
			<Navigation />
		</>
	);
};
export default SomeLayout;
