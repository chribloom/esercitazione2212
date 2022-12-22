import React, { useState } from "react";
import {Alert, AlertTitle, Box, Button, Grid, Paper, TextField, Typography,} from "@mui/material";
import logoNtt from "../Assets/NTT_Data-Logo.png";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const initialState = {
    utenteRegistrato: {
      username: "ntt",
      password: "nttdata",
    },
    username: "",
    password: "",
  };
  const [login, setLogin] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [mostra, setMostra] = useState(false);
  const navigate = useNavigate()
  
  function navigazione(){
    navigate("/homepage");
    }

  function handleChangePassword(event) {
    setLogin((prevState) => ({ ...prevState, password: event.target.value }));
  }

  function handleSubmit() {
    setMostra(true);
    setSuccess(login.username === login.utenteRegistrato.username &&  login.password === login.utenteRegistrato.password?    
        setTimeout(() => {
            navigazione();
        setMostra(false);
        }, 3000)  :""
        
    );


  }

  return (
    <Grid
      container
      component="main"
      justifyContent="center"
      alignItems="center"
      className="form"
      my={8}
    >
      <Grid
        item
        xs={10}
        sm={8}
        md={3}
        component={Paper}
        elevation={10}
        square
        px={5}
      >
        <Box
          sx={{
            my: 5,
            mx: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            mt={-2}
            component="img"
            sx={{
              height: 233,
              width: 350,
              maxHeight: { xs: 133, md: 100, lg: 167 },
              maxWidth: { xs: 253, md: 170, lg: 250 },
            }}
            alt="Logo"
            src={logoNtt}
          />
          <Typography variant="h3" mt={-4} mb={5}>
            Accedi
          </Typography>
          <TextField
            label="Username"
            placeholder="Enter username"
            margin="dense"
            fullWidth
            required
            onChange={(event) =>
              setLogin((prevState) => ({
                ...prevState,
                username: event.target.value,
              }))
            }
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            margin="dense"
            type="password"
            fullWidth
            required
            onChange={handleChangePassword}
          />
          <Button
            type="submit"
            color="primary"
            variant="contained"
            sx={{ my: 5 }}
            fullWidth
            onClick={handleSubmit}
          >
            Accedi
          </Button>
          <Grid align="center">
            {mostra ? (
              success ? (
                <>
                  <h2>L'Username è: {login.username}</h2>
                  <h2>La Password è: {login.password}</h2>
                  <Alert severity="success">
                    <AlertTitle>Login effettuata</AlertTitle>
                    Utente presente nel <strong>Database</strong>
                  </Alert>
                </>
              ) : (
                <>
                  <Alert severity="error">
                    <AlertTitle>Utente non trovato</AlertTitle>
                    Si prega di compilare <strong>correttamente </strong> i
                    campi
                  </Alert>
                  <h2>L'Username è: {login.username}</h2>
                  <h2>La Password è: {login.password}</h2>
                </>
              )
            ) : (
              <></>
            )}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}
