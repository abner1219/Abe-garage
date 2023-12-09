import React from "react";
import vehicleService from "../services/vehicle.service.js";
import customerService from "../services/customer.service.js";

const vehicleController = {
	addVehicle: async (req, res, next) => {
		// console.log(req.body);
		const {
			customer_id,
			vehicle_year,
			vehicle_make,
			vehicle_model,
			vehicle_type,
			vehicle_mileage,
			vehicle_tag,
			vehicle_serial,
			vehicle_color,
		} = req.body;

		// check all fields are sent
		if (
			!customer_id ||
			!vehicle_year ||
			!vehicle_make ||
			!vehicle_model ||
			!vehicle_type ||
			!vehicle_mileage ||
			!vehicle_tag ||
			!vehicle_serial ||
			!vehicle_color
		) {
			return res.status(500).json({
				success: "false",
				message: "All fields are required",
			});
		}

		customerService.checkCustomerById(customer_id, (err, results) => {
			if (err) {
				return res.status(500).json({
					success: "false",
					message:
						"Database connection error during registering customer adding",
				});
			} else {
				if (!results.length) {
					return res.status(404).json({
						success: "false",
						message: "no customer found",
					});
				} else {
					vehicleService.addTocustomer_vehicle_info(
						req.body,
						(err, results3) => {
							if (err) {
								return res.status(500).json({
									success: "false",
									message:
										"Database connection error during registering customer adding",
								});
							} else {
								console.log(results3);
								return res.status(200).json({
									success: "true",
									message: "Vehicle registered successfully",
								});
							}
						}
					);
				}
			}
		});

		// 	if (err) {
		// 		return res.status(500).json({
		// 			success: "false",
		// 			message:
		// 				"Database connection error during registering customer adding",
		// 		});
		// 	} else {
		// 		req.body.vehicle_id = results.insertId;
		// 		vehicleService.addTocustomer_vehicle_info(req.body, (err, results3) => {
		// 			if (err) {
		// 				return res.status(500).json({
		// 					success: "false",
		// 					message:
		// 						"Database connection error during registering customer adding",
		// 				});
		// 			} else {
		// 				console.log(results3);
		// 				return res.status(200).json({
		// 					success: "true",
		// 					message: "Vehicle registered successfully",
		// 				});
		// 			}
		// 		});
		// 	}
		// });
	},
};

export default vehicleController;
