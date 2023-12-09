export default {
	addcustomer_vehicle_infoTableQuery: `INSERT INTO customer_vehicle_info (customer_id, vehicle_year, vehicle_make, vehicle_model, vehicle_type, vehicle_mileage, vehicle_tag, vehicle_serial, vehicle_color)
	   VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
	   `,
};
