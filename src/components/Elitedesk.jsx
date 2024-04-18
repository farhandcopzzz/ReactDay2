import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Elitedesk = () => {
    var [data,setData]=useState()
    const btnGallery=()=>{
        setData("Gallery")
    }
    const btnHome=()=>{
        setData("Home")
    }
    const btnContactUs=()=>{
        setData("Contact Us")
    }
  return (
    <div style={{margin:'10%'}}>
      <Typography variant='h4'>Welcome to {data}</Typography>
      <Button variant='contained' onClick={btnGallery} color='error'>Gallery</Button>&nbsp;
      <Button variant='contained' onClick={btnHome} color='inherit'>Home</Button>&nbsp;
      <Button variant='contained' onClick={btnContactUs} color='warning'>Contact Us</Button>
    </div>
  )
}

export default Elitedesk
