import { Box } from '@mui/system'
import React from 'react'
import About from './About'
import Dinning from './Dinning'
import Events from './Events'
import Experience from './Experience'
import { Button } from '@mui/material'
import Gallery from './Gallery'
import MoreItem from './MoreItem'
import Offers from './Offers'
import Rooms from './Rooms'


export default function Appbar() {
    return(
      
      <Box sx={{ display: { xs: 'none', md: 'flex' } ,backgroundColor:'black', color:'white', pl:'190px',py:0.5}}>
        <About />
        <Rooms />
        <Dinning />
        <Experience />
        <Events />
        <Gallery />
        <Offers />
        <MoreItem />
        <Button sx={{ml:32,color:'white',borderColor:'white'}} variant="outlined">Find a Hotel</Button>
      </Box>
    )
}
