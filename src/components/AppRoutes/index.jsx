import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "../../layouts/AuthLayout";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import ForgotPassword from "../../pages/ForgotPassword";
import AdminLayout from "../../layouts/AdminLayout";
import Users from "../../pages/Users";
import Dashboard from "../../pages/Dashboard";
import Settings from "../../pages/Settings";
import NotFound from "../../pages/NotFound";
import SomeLayout from "../../layouts/SomeLayout";

const AppRouters = () => {
	return (
		<Router>
			<Routes>
				<Route element={<SomeLayout />}>
					<Route element={<DefaultLayout />}>
						<Route index element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/posts" element={<Posts />} />
						<Route path="/posts/:id" element={<PostDetail />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/privacy" element={<Privacy />} />
					</Route>

					<Route element={<AuthLayout />}>
						<Route path="/login" element={<Login />} />
						<Route path="/register" element={<Register />} />
						<Route path="/forgot-password" element={<ForgotPassword />} />
					</Route>

					<Route element={<AdminLayout />}>
						<Route path="/admin" element={<Dashboard />} />
						<Route path="/admin/users" element={<Users />} />
						<Route path="/admin/settings" element={<Settings />} />
					</Route>

					<Route path="/*" element={<NotFound />}></Route>
				</Route>
			</Routes>
		</Router>
	);
};
export default AppRouters;
