import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/bootstrap.css";

import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/color.css";
//pages
import Home from "./markup/pages/Home";
import About from "./markup/pages/About";
import Contact from "./markup/pages/Contact";
import Login from "./markup/pages/Login";
import Services from "./markup/pages/Services";
import Fo4 from "./markup/pages/404";

// admin page
import AddEmployee from "./markup/pages/admin/AddEmployee/AddEmployee";
import AddCustomer from "./markup/pages/admin/addCustomer/AddCustomer";

//componnents
import Header from "./markup/components/Header/Header";
import Footer from "./markup/components/Footer/Footer";
import AddEmployeePage from "./markup/pages/admin/AddEmployeePage";
import AddCustomerPage from "./markup/pages/admin/AddCustomerPage";
import AdminDashbordPage from "./markup/pages/admin/AdminDashbordPage";
import EditCustomerPage from "./markup/pages/admin/editCustomer/EditCustomerPage";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<Home />
						</>
					}
				/>
				<Route
					path="/about"
					element={
						<>
							<About />
						</>
					}
				/>
				<Route
					path="/contact"
					element={
						<>
							<Contact />
						</>
					}
				/>
				<Route
					path="/services"
					element={
						<>
							<Services />
						</>
					}
				/>
				<Route
					path="/login"
					element={
						<>
							<Login />
						</>
					}
				/>

				<Route
					path="/admin/add-employee"
					element={
						<>
							<AddEmployeePage />
						</>
					}
				/>

				<Route
					path="/admin/add-customer"
					element={
						<>
							<AddCustomerPage />
						</>
					}
				/>
				<Route
					path="/admin/edit-customer"
					element={
						<>
							<EditCustomerPage />
						</>
					}
				/>

				<Route
					path="/admin/add-customer"
					element={
						<>
							<AddCustomerPage />
						</>
					}
				/>
				<Route
					path="/admin/dashbord"
					element={
						<>
							<AdminDashbordPage />
						</>
					}
				/>

				<Route
					path="/*"
					element={
						<>
							<Fo4 />
						</>
					}
				/>
			</Routes>
			<Footer />
		</>
	);
}

export default App;
