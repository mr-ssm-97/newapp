import { Box } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          height: "75px",
          width: "100%",
          backgroundColor: "primary.main",
          marginTop: "20px",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>copyright@sharan store 2023. All Rights Reserved.</p>
      </Box>
    </>
  );
}
