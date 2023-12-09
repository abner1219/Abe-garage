export default {

   selectAllEmployeeQuery: `SELECT 
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
   company_roles cr ON er.company_role_id = cr.company_role_id OR er.company_role_id IS NULL;`

   

}