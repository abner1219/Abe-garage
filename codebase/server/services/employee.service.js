import conn from "../config/db.js";
import usersQuery from '../query/user.query.js'

const employeeService = {
    // Get user by email
    getUserByEmail: (userEmail, callback) => {
        conn.query(usersQuery.getUserByEmailQuery, [userEmail], (error, result, fields) => {
            if (error) {
                console.log(error);
                return callback(error);
            } else {
           
                return callback(null, result);
            }
        });
    },

    registerEmployee: (data, callback) => {
        conn.query(usersQuery.employeeTableInsertQuery, [data.employee_email, data.active_employee], (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result);
        });
    },

    registerEmployeeInfo: (data, callback) => {
        conn.query(usersQuery.employeeInfoTableInsertQuery, [data.employee_id, data.employee_first_name, data.employee_last_name, data.employee_phone], (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result);
        });
    },

    registerEmployeePassword: (data, callback) => {
        conn.query(usersQuery.employeePasswordTableInsertQuery, [data.employee_id, data.employee_password], (error, result, fields) => {
            if (error) {
                return callback(error);
            }
            return callback(null, result);
        });
    },

    getAllUsers: (callback) => {
        conn.query(usersQuery.selectAllEmployeeQuery, (error, result, fields) => {
            if (error) {
                console.log(error);
                return callback(error);
            } else {
           
                return callback(null, result);
            }
        });
    },


};

export default employeeService;