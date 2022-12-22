import { Card, CardContent, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from 'react'



export default function Fetch() {

const initialState = {
    userId:"4567",
    id:"345678",
    title:"",
    completed:""

};

const [json, setJson] =useState(initialState);

useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/todos/1')

        .then(response => response.json())

        .then(responseJson => setJson((prevState) => ({

            ...prevState,

           

            title: responseJson.title,

            completed: responseJson.completed

        })))



}, [])

  return (
    <Grid align="center" marginTop={30}>
      <Card sx={{ width: 375, background: "#f5f5f5" }}>
        <CardContent>
          <Typography variant="h4" color="text.secondary" gutterBottom>
            FAT
          </Typography>
          <Typography variant="h6" component="div">

                            {json.userId}

                        </Typography>

                        <Typography variant="h6" component="div">

                            {json.id}

                        </Typography>

                        <Typography variant="h6" component="div">

                            {json.title}

                        </Typography>

                        <Typography variant="h6" component="div">

                            {json.completed}

                        </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
