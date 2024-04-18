
import { Button, TextField, Typography } from '@mui/material'

import React, { useState } from 'react'

const Prodesk = () => {
    var[input,setInput] =useState()
    var[b,setB]=useState()
    const inputHandler=(e)=>{
        console.log(e.target.value)
        setInput(e.target.value)
    }
    const btnClicked=()=>{
      setB(input)
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant='h3'>{b}</Typography>
       
      <TextField variant='outlined' label='Name' onChange={inputHandler}></TextField><br /><br />
 <Button variant='contained' onClick={btnClicked}>click</Button>
    </div>
  )
}

export default Prodesk
