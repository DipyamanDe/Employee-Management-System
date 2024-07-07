import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const getEmployee = async () => {
    const response = await fetch(EmployeeService());
    const employees = await response.json();
    setEmployees(employees);
  };

  useEffect(() => {
    getEmployee();
  }, []);

  //   const componentDidMount=()=>{
  //    EmployeeService.getEmployees().then((res)=>{
  //      this.setState({employees:res.data});
  //    });
  //  }
  const editEmployee = (id) => {
    navigate(`/update-employee/${id}`);
  };
  const deleteEmployee = (id) => {
    axios.delete(EmployeeService() + "/" + id).then((res) => {
      let newEmployee = employees.filter((emp) => emp.id !== id);
      setEmployees(newEmployee);
    });
  };

  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  };

  const addEmployee = () => {
    navigate("/add-employee");
  };

  return (
    <div>
      <h2 className="text-center">Employees List</h2>
      <div>
        <button className="btn btn-primary" onClick={addEmployee}>
          Add Employee
        </button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td>
                  <button
                    onClick={() => editEmployee(employee.id)}
                    className="btn btn-info"
                  >
                    Update
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteEmployee(employee.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                  <button
                    style={{ marginLeft: "15px" }}
                    onClick={() => viewEmployee(employee.id)}
                    className="btn btn-info"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListEmployeeComponent;
