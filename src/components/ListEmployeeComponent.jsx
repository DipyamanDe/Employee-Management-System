import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Container,
  Box,
  Typography,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
} from "@mui/icons-material";

function ListEmployeeComponent() {
  const [employees, setEmployees] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();

  const getEmployee = async () => {
    const response = await fetch(EmployeeService());
    const employees = await response.json();
    setEmployees(employees);
  };

  useEffect(() => {
    getEmployee();
  }, []);

  const editEmployee = (id) => {
    navigate(`/update-employee/${id}`);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setOpenDialog(true);
  };

  const confirmDelete = () => {
    if (deleteId) {
      axios.delete(`${EmployeeService()}/${deleteId}`).then(() => {
        setEmployees(employees.filter((emp) => emp.id !== deleteId));
        setDeleteId(null);
        setOpenDialog(false);
      });
    }
  };

  const cancelDelete = () => {
    setDeleteId(null);
    setOpenDialog(false);
  };

  const viewEmployee = (id) => {
    navigate(`/view-employee/${id}`);
  };

  const addEmployee = () => {
    navigate("/add-employee");
  };

  return (
    <Container maxWidth="lg">
      <Box my={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Employees List
        </Typography>
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
            onClick={addEmployee}
          >
            Add Employee
          </Button>
        </Box>
        <Paper>
          <Box sx={{ maxHeight: 500, overflow: "auto" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ fontWeight: 'bold' }}>Employee First Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Employee Last Name</TableCell>
                  <TableCell sx={{ fontWeight: 'bold' }}>Employee Email Id</TableCell>
                  <TableCell align="center" sx={{ fontWeight: 'bold' }} >Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id} hover>
                    <TableCell>{employee.firstName}</TableCell>
                    <TableCell>{employee.lastName}</TableCell>
                    <TableCell>{employee.emailId}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        onClick={() => editEmployee(employee.id)}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="secondary"
                        onClick={() => handleDeleteClick(employee.id)}
                      >
                        <DeleteIcon />
                      </IconButton>
                      <IconButton
                        color="info"
                        onClick={() => viewEmployee(employee.id)}
                      >
                        <VisibilityIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Paper>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Confirm Delete"}
        </DialogTitle>
        <DialogContent>
          Are you sure you want to delete this employee?
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default ListEmployeeComponent;
