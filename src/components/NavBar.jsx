import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>


    <Button color="inherit"><Link style={{textDecoration: "none", color:"whitesmoke"}} to={"/prova"}>
     PROVA</Link></Button>
    <Button color="inherit"><Link style={{textDecoration: "none", color:"whitesmoke"}} to={"/mouse"}>
    MOUSE</Link></Button>
    <Button color="inherit"><Link style={{textDecoration: "none", color:"whitesmoke"}} to={"/fetch"}>
     FETCH</Link></Button>
     <Button color="inherit"><Link style={{textDecoration: "none", color:"whitesmoke"}} to={"/login"}>
     LOGIN</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

