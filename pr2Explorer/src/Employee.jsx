import React from 'react';
import './Employee.css'

const EmployeeList = ({ employees }) => {
    return (
        <div className="employee-list">
            {employees.map(employee => (
                <div key={employee.empid} className="employee-card">
                    <h2>{employee.empname}</h2>
                    <p>Email: {employee.empemail}</p>
                    <p>Phone: {employee.empphone}</p>
                    <p>Department: {employee.empdepartment}</p>
                    <p>Designation: {employee.empdeg}</p>
                    <p>Salary: ${employee.empsalary}</p>
                    <p>Address: {employee.empaddress.area}, {employee.empaddress.city}, {employee.empaddress.state}, {employee.empaddress.country}</p>
                </div>
            ))}
        </div>
    );
};

export default EmployeeList;


