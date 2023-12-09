import employeeService from "../services/employee.service.js";
import bcrypt from "bcrypt";

const employeeController = {
	addemployee(req, res, next) {
		const {
			employee_email,
			employee_first_name,
			employee_last_name,
			employee_phone,
			active_employee,
			employee_password,
		} = req.body;
		// check all fields are sent
		if (
			!employee_email ||
			!employee_first_name ||
			!employee_last_name ||
			!employee_phone ||
			!employee_password ||
			!active_employee
		) {
			return res.status(500).json({
				success: "false",
				message: "All fields are required",
			});
		}
		// check if the email is related to another account
		employeeService.getUserByEmail(employee_email, (err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					success: "false",
					message: "Database connection error during email checking",
				});
			} else {
				if (results.length) {
					return res.status(500).json({
						success: "false",
						message: "The email is already used",
					});
				} else {
					employeeService.registerEmployee(req.body, (err, results) => {
						if (err) {
							return res.status(500).json({
								success: "false",
								message:
									"Database connection error during registering employee",
							});
						} else {
							req.body.employee_id = results.insertId;

							employeeService.registerEmployeeInfo(req.body, (err, results) => {
								if (err) {
									return res.status(500).json({
										success: "false",
										message:
											"Database connection error during registering employee info",
									});
								} else {
									// password encryption
									const salt = bcrypt.genSaltSync(10);
									req.body.employee_password = bcrypt.hashSync(
										employee_password,
										salt
									);
									employeeService.registerEmployeePassword(
										req.body,
										(err, results) => {
											if (err) {
												return res.status(500).json({
													success: "false",
													message:
														"Database connection error during registering employee password",
												});
											} else {
												return res.status(200).json({
													success: "true",
													message: "Employee registered successfully",
												});
											}
										}
									);
								}
							});
						}
					});
				}
			}
		});

		// data valid => start registering
	},

	allEmployee(req, res, next) {
		employeeService.getAllUsers((err, results) => {
			if (err) {
				console.log(err);
				return res.status(500).json({
					success: "false",
					message: "Database connection error during email checking",
				});
			} else {
				return res.status(200).json({
					success: true,
					data: results,
				
				});
		 }
		}
		);
	}
		
};

export default employeeController;
