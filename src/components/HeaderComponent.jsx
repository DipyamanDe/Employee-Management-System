import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function HeaderComponent() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div">
            Employee Edge
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default HeaderComponent;
