to do:

add employee data
add a department
add a role

update employee - pick employee to update one of their parameters (salary, manager, role)

`SELECT employee.id,
            CONCAT(employee.first_name, ' ', employee.last_name) as name,
            role.title as role_title,
            role.salary as role_salary,
            department.name as department_name,
            IF(CONCAT(employee.manager_id) IS NULL, 'NULL', CONCAT(manager.first_name, ' ', manager.last_name))
            
            FROM employee

            INNER JOIN role ON employee.role_id = role.id
            INNER JOIN department ON role.department_id = department.id
            LEFT JOIN employee as manager ON employee.manager_id = manager.id`