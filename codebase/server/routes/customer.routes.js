import customerController from "../controllers/customer.controller.js";
import express from "express";
const customerRoute = express.Router();
customerRoute.post("/api/add-customer", customerController.addcustomer);
customerRoute.get("/all-customer", customerController.allcustomer);
// customerRoute.get('/single-customer', customerController.singlecustomer);
customerRoute.put(
	"/api/update-single-customer/:id",
	customerController.updatesinglecustomer
);
// customerRoute.delete('/delete-single-customer', customerController.deletesinglecustomer);

export default customerRoute;
