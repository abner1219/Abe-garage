import React, { useState } from "react";
import axios from "axios"; 
import formvali from "../../../../util/validation";


function UpdateCustomer() {
	const [form, setForm] = useState({
		customer_first_name: "",
		customer_last_name: "",
		customer_phone: "",
		is_active: false,
	});

	const [errors, setErrors] = useState({});

	const handleSubmit = async (e) => {
		e.preventDefault();
		const isValid = formvali.validateForm3(form);
		console.log(isValid);
		if (!isValid.isValid) {
			console.log(isValid.errors);
		} else {
			try {
				const response = await axios.post(
					"/admin/update-single-customer",
					form
				);
				if (response.data.success) {
					e.target.value = "";
					alert(response.data.message);
					window.location.reload();
				}
			} catch (error) {
				alert(error.response.data.message);
			}
		}
	};

	return (
		<>
			<div>
				<div className="form-column col-lg-7">
					<div className="inner-column">
						<div className="contact-form sec-title style-two">
							<br />
							<h2>Update:</h2>
							<br />
							<p className="font-weight-bold">Customer email:</p>
							<form onSubmit={handleSubmit} id="contact-form">
								<div className="row clearfix">
									<div className="form-group col-md-12">
										<input
											type="text"
											name="customer_first_name"
											placeholder="customer First Name"
											required
											onChange={(e) => {
												setForm({
													...form,
													customer_first_name: e.target.value,
												});
											}}
										/>
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="customer_last_name"
											placeholder="customer last  Name"
											required
											onChange={(e) => {
												setForm({
													...form,
													customer_last_name: e.target.value,
												});
											}}
										/>
									</div>
									<div className="form-group col-md-12">
										<input
											type="text"
											name="customer_phone"
											placeholder="customer phone"
											required
											onChange={(e) => {
												setForm({
													...form,
													customer_phone: e.target.value,
												});
											}}
										/>
									</div>
									<div className="form-group col-md-12">
										<label>
											<input
												type="checkbox"
												name="is_active"
												checked={form.is_active}
												onChange={(e) => {
													setForm({
														...form,
														is_active: e.target.checked,
													});
												}}
											/>
											Is active customer
										</label>
									</div>
									<div className="form-group col-md-12">
										<button
											className="theme-btn btn-style-one"
											type="submit"
											data-loading-text="Please wait..."
										>
											<span>UPDATE</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default UpdateCustomer;
