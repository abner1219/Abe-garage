import vehicleController from "../controllers/vehicle.controller.js";
import express from "express";
const vehicleRoute = express.Router();

vehicleRoute.post("/api/vehicle", vehicleController.addVehicle);
// customerRoute.post("/api/add-customer", customerController.addcustomer);

export default vehicleRoute;
