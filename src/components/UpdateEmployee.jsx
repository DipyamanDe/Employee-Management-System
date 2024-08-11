import React, { useEffect, useState } from "react";
import { TextField, Button, Container, Typography, Card, CardContent, Grid, Box } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import EmployeeService from "../services/EmployeeService";

function UpdateEmployee() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const updateEmployee = (e) => {
    e.preventDefault();
    const employee = {
      firstName,
      lastName,
      emailId,
    };
    axios.put(`${EmployeeService()}/${id}`, employee).then(() => {
      navigate("/employee");
    });
  };

  useEffect(() => {
    axios
      .get(`${EmployeeService()}/${id}`)
      .then((res) => {
        const employee = res.data;
        setFirstName(employee.firstName);
        setLastName(employee.lastName);
        setEmailId(employee.emailId);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [id]);

  const cancel = (e) => {
    e.preventDefault();
    navigate("/employee");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            Update Employee
          </Typography>
          <Box component="form" onSubmit={updateEmployee} sx={{ mt: 2 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </Grid>
            </Grid>
            <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
              <Button variant="contained" color="primary" type="submit">
                Update
              </Button>
              <Button variant="contained" color="secondary" onClick={cancel}>
                Cancel
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default UpdateEmployee;
