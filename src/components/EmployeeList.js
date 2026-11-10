import React, { useState } from 'react';
import './EmployeeList.css';

function EmployeeList({ employees }) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <div className="employee-list">
      <h2>Employee List</h2>

      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
          {employees.map((employee) => (
            <li key={employee.id}>
              <button
                type="button"
                onClick={() => setSelectedEmployee(employee)}
              >
                {employee.name}
              </button>
            </li>
          ))}
        </ul>
      )}

      {selectedEmployee && (
        <div className="employee-details">
          <h3>Employee Details</h3>
          <p><strong>Name:</strong> {selectedEmployee.name}</p>
          <p><strong>Email:</strong> {selectedEmployee.email}</p>
          <p><strong>Job Title:</strong> {selectedEmployee.title}</p>
          <p><strong>Department:</strong> {selectedEmployee.department}</p>

          <button
            type="button"
            onClick={() => setSelectedEmployee(null)}
          >
            Close Details
          </button>
        </div>
      )}
    </div>
  );
}

export default EmployeeList;