import React, { useState } from 'react';
import './EmployeeList.css';

function EmployeeList({ employees, deleteEmployee, editEmployee }) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingEmployee, setEditingEmployee] = useState(null);
  const filteredEmployees = employees.filter((employee) =>
  employee.name.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <input
  type="text"
  placeholder="Search employees by name..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
  aria-label="Search employees by name"
/>

      {employees.length === 0 ? (
        <p>No employees added yet.</p>
      ) : (
        <ul>
        {filteredEmployees.map((employee) => (
            <li key={employee.id}>
<button
  type="button"
  onClick={() => {
    setSelectedEmployee(employee);
    setEditingEmployee(null);
  }}
>
  {employee.name}
</button>
            <button className="delete-button"
  type="button"
  onClick={() => {
    if (window.confirm(`Are you sure you want to delete ${employee.name}?`)) {
      deleteEmployee(employee.id);
      setSelectedEmployee(null);
    }
  }}
>
  Delete
</button>
<button
  type="button"
  onClick={() => {
    setEditingEmployee({ ...employee });
    setSelectedEmployee(null);
  }}
>
  Edit
</button>
</li>
          ))}
          </ul>
)}

{editingEmployee && (
  <div className="employee-details">
    <h3>Edit Employee</h3>

    <form
      onSubmit={(event) => {
        event.preventDefault();
        editEmployee(editingEmployee);
        setEditingEmployee(null);
      }}
    >
      <label htmlFor="edit-name">Name:</label>
      <input
        id="edit-name"
        type="text"
        value={editingEmployee.name}
        onChange={(event) =>
          setEditingEmployee({
            ...editingEmployee,
            name: event.target.value
          })
        }
        required
      />

      <label htmlFor="edit-email">Email:</label>
      <input
        id="edit-email"
        type="email"
        value={editingEmployee.email}
        onChange={(event) =>
          setEditingEmployee({
            ...editingEmployee,
            email: event.target.value
          })
        }
        required
      />

      <label htmlFor="edit-title">Job Title:</label>
      <input
        id="edit-title"
        type="text"
        value={editingEmployee.title}
        onChange={(event) =>
          setEditingEmployee({
            ...editingEmployee,
            title: event.target.value
          })
        }
        required
      />

      <label htmlFor="edit-department">Department:</label>
      <input
        id="edit-department"
        type="text"
        value={editingEmployee.department}
        onChange={(event) =>
          setEditingEmployee({
            ...editingEmployee,
            department: event.target.value
          })
        }
        required
      />

      <button type="submit">Save Changes</button>

      <button
        type="button"
        onClick={() => setEditingEmployee(null)}
      >
        Cancel
      </button>
    </form>
  </div>
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