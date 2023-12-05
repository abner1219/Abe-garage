import React, { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Login = () => {
	const [userEmail, setUserEmail] = useState("");
	const [showpassword, setShowpassword] = useState(true);
	const [userPassword, setUserPassword] = useState("");
	const [error, setError] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		const valid = validateEmailAndPassword(userEmail, userPassword);
		console.log(userEmail, userPassword);
		console.log(valid);

		if (valid.status) {
			setError(null);
			console.log("send to server");
		} else {
			setError(valid.message);
			console.log(valid.message);
		}
	};
	const IconChanger = () => {
		setShowpassword(!showpassword);
	};

	function validateEmailAndPassword(email, password) {
		// Regular expression patterns for email and password validation
		var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

		// Validate email
		if (!emailPattern.test(email)) {
			return {
				status: false,
				message: "Invalid email address",
			};
		}

		// Validate password
		if (!passwordPattern.test(password)) {
			return {
				status: false,
				message:
					"Invalid password. Password must be at least 8 characters long and contain at least one letter and one number.",
			};
		}

		// Validation passed
		return {
			status: true,
			message: "Validation successful",
		};
	}

	return (
		<div class="d-flex justify-content-center align-items-center">
			<div className="form-column col-lg-7 text-center">
				<div className="inner-column">
					<h3 className="align-items-start">Login to your account </h3>
					<div className="contact-form">
						<form method="post" onSubmit={handleSubmit} id="contact-form">
							<div className="row clearfix">
								<div className="form-group col-md-8">
									<input
										type="email" 
										name="employee_email"
										placeholder="Your Email"
										required
										onChange={(e) => setUserEmail(e.target.value)}
									/>
								</div>
								{error && error == "Invalid email address" && (
									<span>{error}</span>
								)}

								<div
									className="form-group col-md-8"
									style={{ display: "flex", alignItems: "center" }}
								>
									<input
										type={showpassword ? "password" : "text"}
										name="employee_password"
										placeholder="Your password"
										required
										onChange={(e) => setUserPassword(e.target.value)}
									/>{" "}
									{showpassword ? (
										<VisibilityOffIcon onClick={IconChanger} />
									) : (
										<VisibilityIcon onClick={IconChanger} />
									)}
								</div>
								{error &&
									error ==
										"Invalid password. Password must be at least 8 characters long and contain at least one letter and one number." && (
										<span>{error}</span>
									)}
								<div className="form-group col-md-8">
									<input
										id="form_botcheck"
										name="form_botcheck"
										className="form-control"
										type="hidden"
										value=""
									/>
									<button
										className="theme-btn btn-style-one"
										type="submit"
										data-loading-text="Please wait..."
									>
										<span>Login</span>
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
