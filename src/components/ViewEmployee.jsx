import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography, Box, Grid, Container, Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import EmployeeService from "../services/EmployeeService";

function ViewEmployee() {
  const [employee, setEmployee] = useState({ firstName: "", lastName: "", emailId: "" });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${EmployeeService()}/${id}`).then((res) => {
      setEmployee(res.data);
    });
  }, [id]);

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Card sx={{ p: 3 }}>
        <Typography variant="h4" align="center" gutterBottom>
          View Employee Details
        </Typography>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box>
                <Typography variant="subtitle1" display="inline">Employee First Name: </Typography>
                <Typography variant="body1" display="inline">{employee.firstName}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography variant="subtitle1" display="inline">Employee Last Name: </Typography>
                <Typography variant="body1" display="inline">{employee.lastName}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box>
                <Typography variant="subtitle1" display="inline">Employee Email ID: </Typography>
                <Typography variant="body1" display="inline">{employee.emailId}</Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ mt: 3, textAlign: "center" }}>
            <Button variant="contained" color="primary" onClick={handleBackClick}>
              Back
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

export default ViewEmployee;
