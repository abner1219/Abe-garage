
export default {
    getUserByEmailQuery: `select * from employee where employee_email=? `,
    employeeTableInsertQuery: `INSERT INTO employee (employee_email, active_employee, added_date) VALUES (?,?,now());`,
    employeeInfoTableInsertQuery: `INSERT INTO employee_info (employee_id, employee_first_name, employee_last_name, employee_phone) VALUES (?,?,?,?);`,
    employeePasswordTableInsertQuery: `INSERT INTO employee_pass (employee_id, employee_password_hashed) VALUES (?, ?);`

    ,selectAllEmployeeQuery: `SELECT DISTINCT
    e.active_employee,
    ei.employee_first_name AS firstname,
    ei.employee_last_name AS lastname,
    e.employee_email AS email,
    ei.employee_phone AS phone,
    e.added_date,
    cr.company_role_name
FROM 
    employee e
JOIN 
    employee_info ei ON e.employee_id = ei.employee_id
LEFT JOIN 
    employee_role er ON e.employee_id = er.employee_id
LEFT JOIN 
    company_roles cr ON er.company_role_id = cr.company_role_id OR er.company_role_id IS NULL;
`,
}