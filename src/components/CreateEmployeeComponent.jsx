import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Paper,
  TextField,
  Button,
  Typography,
} from "@mui/material";

function CreateEmployeeComponent() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const navigate = useNavigate();

  const saveEmployee = async (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      emailId,
    };
    console.log("employee => " + JSON.stringify(employee));

    try {
      await fetch(EmployeeService(), {
        method: "POST",
        body: JSON.stringify(employee),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      navigate("/employee");
    } catch (error) {
      console.error("Error saving employee:", error);
    }
  };

  const cancel = (e) => {
    e.preventDefault();
    navigate("/employee");
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Paper elevation={3}>
          <Box p={3}>
            <Typography variant="h5" align="center" gutterBottom>
              Add Employee
            </Typography>
            <form onSubmit={saveEmployee}>
              <Box mb={2}>
                <TextField
                  variant="outlined"
                  label="First Name"
                  fullWidth
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  variant="outlined"
                  label="Last Name"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Box>
              <Box mb={2}>
                <TextField
                  variant="outlined"
                  label="Email Address"
                  fullWidth
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Save
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={cancel}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default CreateEmployeeComponent;
