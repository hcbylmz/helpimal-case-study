import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function Login({ setAuthorized, authorized }) {
  const [mailErrorText, setMailErrorText] = useState(
    "mail adresi:deneme@deneme.com"
  );
  const [mailError, setMailError] = useState(false);
  const [passwordErrorText, setPasswordErrorText] = useState("sifre:Abc123abc");
  const [passwordError, setPasswordError] = useState(false);
  const [mailValue, setMailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  let history = useHistory();

  function handleMailChange(event) {
    setMailValue(event.target.value);
  }

  function handlePasswordChange(event) {
    setPasswordValue(event.target.value);
  }

  function validateMail(mailAdress) {
    let validMail = new RegExp("^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$");
    if (!validMail.test(mailAdress)) {
      setMailErrorText("mail adresi geçerli değil gibi görünüyor.");
      setMailError(true);
      return;
    } else {
    }
  }

  function validatePassword(password) {
    let validPassword = new RegExp(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
    );
    if (!validPassword.test(password)) {
      setPasswordErrorText(
        "şifre en az 8 karakterli olmalı ve 1 küçük harf,1 büyük harf ve 1 rakam içermeli"
      );
      setPasswordError(true);
      return;
    } else {
    }
  }

  function handleLogin() {
    setPasswordError(false); // for redirection
    setMailError(false); // for redirection

    redirection();

    validateMail(mailValue);
    validatePassword(passwordValue);
  }
  function redirection() {
    if (mailValue === "deneme@deneme.com" && passwordValue === "Abc123abc") {
      console.log("if");
      setAuthorized(true);
      history.push("/userlist");
    } else {
      console.log("else");
      setPasswordError(true);
      setPasswordErrorText("mail adresi veya şifre hatalı.");
      setMailErrorText("");
      setMailError(true);
    }
  }

  return (
    <Box
      component="form"
      sx={{
        width: 300,
        height: 300,
        mx: "auto",
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="Username"
        label="Username"
        variant="outlined"
        helperText={mailErrorText}
        error={mailError}
        onChange={handleMailChange}
      />
      <TextField
        id="Password"
        label="Password"
        variant="outlined"
        helperText={passwordErrorText}
        error={passwordError}
        onChange={handlePasswordChange}
        type="password"
      />
      <Button variant="contained" onClick={handleLogin}>
        Sign In
      </Button>
    </Box>
  );
}

export default Login;
