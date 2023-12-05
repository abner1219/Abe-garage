import React from "react";
import Admin from "../../../components/Admin/AdminMenu/Admin";
import EditCustomer from "./EditCustomer";

function EditCustomerPage() {
	return (
		<>
			<div className="container-fluid admin-page">
				<div className="row">
					<div className="col-md-3 admin-left-side">
						<Admin />
					</div>
					<div className=" col-md-9 admin-right-side">
						<EditCustomer />
					</div>
				</div>
			</div>
		</>
	);
}

export default EditCustomerPage;
