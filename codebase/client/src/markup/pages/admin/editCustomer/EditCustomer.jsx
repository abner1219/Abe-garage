import React, { useState } from "react";



function EditCustomer() {
// const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');

//   const handleUpdate = () => {
//     // Perform the update logic here (e.g., send data to a server)
//     console.log('Update:', { firstName, lastName, phoneNumber });
//   };

	const [form, setForm] = useState({});
	const [errors, setErrors] = useState({});

	const hadleSubmit = async (e) => {
		e.preventDefault();
		const isvalid = formvali.validateForm2(form);
		console.log(isvalid);
		if (!isvalid.isValid) {
			console.log(isvalid.errors);
		} else {
			try {
				const responce = await axios.post("/api/add-customer", form);
				if (responce.data.success) {
					e.target.value = "";
					alert(responce.data.message);
					window.location.reload();
				}
			} catch (error3) {
				alert(error3.response.data.message);
			}
		}
	};






  return (
		<>
			<div>
				<div className="form-column col-lg-7">
					<div className="inner-column">
						<div className="contact-form">
							<form onSubmit={hadleSubmit} id="contact-form">
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
												checked={form.is_active} // Assuming is_active is a property in your form state
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

			{/* <div>
				<form>
					<label>
						First Name:
						<input
							type="text"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Last Name:
						<input
							type="text"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</label>
					<br />

					<label>
						Phone Number:
						<input
							type="text"
							value={phoneNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
						/>
					</label>
					<br />

					<button type="button" onClick={handleUpdate}>
						Update
					</button>
				</form>
			</div> */}
		</>
	);
};

export default EditCustomer