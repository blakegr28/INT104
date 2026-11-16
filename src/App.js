import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');

    try {
      return savedEmployees ? JSON.parse(savedEmployees) : [];
    } catch (error) {
      return [];
    }
  });

  const addEmployee = (employee) => {
    setEmployees((previousEmployees) => [
      ...previousEmployees,
      { ...employee, id: Date.now() }
    ]);
  };

  const editEmployee = (updatedEmployee) => {
  setEmployees((previousEmployees) =>
    previousEmployees.map((employee) =>
      employee.id === updatedEmployee.id
        ? updatedEmployee
        : employee
    )
  );
};

  const deleteEmployee = (employeeId) => {
  setEmployees((previousEmployees) =>
    previousEmployees.filter((employee) => employee.id !== employeeId)
  );
};

useEffect(() => {
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  saveData();
}, [employees]);

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} />

<EmployeeList
  employees={employees}
  deleteEmployee={deleteEmployee}
  editEmployee={editEmployee}
/>
    </div>
  );
}

export default App;