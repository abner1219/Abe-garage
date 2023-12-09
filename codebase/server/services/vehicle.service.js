import conn from "../config/db.js";
import vehicleQuery from "../query/vehicle.query.js";

const vehicleService = {
	addTocustomer_vehicle_info: (data, callback) => {
		conn.query(
			vehicleQuery.addcustomer_vehicle_infoTableQuery,
			[
				data.customer_id,
				data.vehicle_year,
				data.vehicle_make,
				data.vehicle_model,
				data.vehicle_type,
				data.vehicle_mileage,
				data.vehicle_tag,
				data.vehicle_serial,
				data.vehicle_color,
			],
			(error, result, fields) => {
				if (error) {
					console.log(error);
					return callback(error);
				} else {
					return callback(null, result);
				}
			}
		);
	},
};
export default vehicleService;
