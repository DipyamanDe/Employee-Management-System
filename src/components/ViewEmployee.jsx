import React, { useState, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";
import { useParams } from "react-router-dom";
import axios from "axios";

function ViewEmployee() {
  let firstName = "";
  let lastName = "";
  let emailId = "";
  const [employees, setEmployees] = useState([]);
  const { id } = useParams();
  let employee = { firstName: firstName, lastName: lastName, emailId: emailId };
  useEffect(() => {
    axios.get(EmployeeService() + "/" + id).then((res) => {
      employee = res.data;
      setEmployees(employee);
    });
  }, [id]);

  return (
    <div>
      <br></br>
      <div className="card col-md-6 offset-md-3">
        <h3 className="text-center"> View Employee Details</h3>
        <div className="card-body">
          <div className="row">
            <label> Employee First Name: </label>
            <div> {employees.firstName}</div>
          </div>
          <div className="row">
            <label> Employee Last Name: </label>
            <div> {employees.lastName}</div>
          </div>
          <div className="row">
            <label> Employee Email ID: </label>
            <div> {employees.emailId}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewEmployee;
