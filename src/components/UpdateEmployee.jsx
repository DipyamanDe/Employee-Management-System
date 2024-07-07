import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function UpdateEmployee(props) {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [emailId, setemailId] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: emailId,
    };
    console.log("employee => " + JSON.stringify(employee));
    console.log("id=> " + JSON.stringify(id));
    axios.put(EmployeeService() + "/" + id, employee);

    navigate("/employee");
  };

  let employee = { firstName: firstName, lastName: lastName, emailId: emailId };
  useEffect(() => {
    axios
      .get(EmployeeService() + "/" + id)
      .then((res) => {
        employee = res.data;
        setfirstName(employee.firstName);
        setlastName(employee.lastName);
        setemailId(employee.emailId);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const cancel = (e) => {
    e.preventDefault();
    navigate("/employee");
  };

  const changeFirstNameHandler = (e) => {
    setfirstName(e.target.value);
  };
  const changelastNameHandler = (e) => {
    setlastName(e.target.value);
  };
  const changeEmailHandler = (e) => {
    setemailId(e.target.value);
  };

  return (
    <div>
      <div className="container"></div>
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          <h3 className="text-center">Update Employee</h3>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label> First Name:</label>
                <input
                  placeholder="First Name"
                  name="firstName"
                  className="form-control"
                  value={firstName}
                  onChange={changeFirstNameHandler}
                />
              </div>
              <div className="form-group">
                <label> Last Name:</label>
                <input
                  placeholder="Last Name"
                  name="lastName"
                  className="form-control"
                  value={lastName}
                  onChange={changelastNameHandler}
                />
              </div>
              <div className="form-group">
                <label> Email:</label>
                <input
                  placeholder="Email Address"
                  name="emailId"
                  className="form-control"
                  value={emailId}
                  onChange={changeEmailHandler}
                />
              </div>
              <button className="btn btn-success" onClick={updateEmployee}>
                update
              </button>
              <button
                className="btn btn-danger"
                onClick={cancel}
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateEmployee;
