import React from "react";
import { Box, Typography, Container } from "@mui/material";

function FooterComponent() {
  return (
    <Box
      component="footer"
      sx={{
        position: "fixed",
        bottom: 0,
        width: "88%",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2">
          All Rights Reserved 2023 @DIPDE
        </Typography>
      </Container>
    </Box>
  );
}

export default FooterComponent;
