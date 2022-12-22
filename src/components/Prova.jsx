import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonCustom from './ButtonCustom'

export default function Prova() {
    const[provaState, setProvaState]= useState({text:"benvenuto"})

    const navigate = useNavigate()

    
function handleChange(evento){
    setProvaState({text: evento.target.value})
}  
function navigazione(){
    navigate("/mouse");
}

    return (

    
    <Grid align="center" marginTop={30}>
        <TextField label="scrivi qui per cambiare lo stato" onChange={handleChange} />
        <Typography > {provaState.text}</Typography>
        
        <Button variant='contained' onClick={navigazione}> clicca per sportati verso il prossimo esercizio!</Button>
        <ButtonCustom text={"vai su fetch"} endpoint={"/fetch"} />


    </Grid>
  )
}