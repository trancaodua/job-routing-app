import React, { useState, useContext } from "react";
import AuthContext from "../auth/AuthContext";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Box from "@mui/material/Box";

function Login() {
  let navigate = useNavigate();
  let from = navigate.state?.from?.pathname || "/";

  return (
    <Box sx={{ p: 4 }}>
      <LoginForm
        callback={() => {
          navigate(from, { replace: true });
        }}
      />
    </Box>
  );
}

export default Login;
