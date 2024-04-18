import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasics = () => {
     var[name,SetName]=useState("Farhan")
     const changeName = ()=>{
        console.log("btn clicked")
        SetName("Ashik")
     }
  return (
    <div>
      <Typography variant='h4'>My name is {name}</Typography>
      <Button variant='contained' onClick={changeName}>change</Button>
    </div>
  )
}

export default StateBasics
