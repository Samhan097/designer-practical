import {   LocalOfferOutlined, Person2Outlined } from '@mui/icons-material'
import { Box, Button } from '@mui/material'
import React from 'react'
import IconLabelTabs from './IconLabelTabs'

export default function SearchBar() {
  
  return (
    <>
        <Box className="searchbox" sx={{  p: 0.8,ml:'300px', height:50}}>
            <Box className="" sx={{backgroundColor:'white', color:'black',  width:300,pb:3.5,pt:0, mr:0.4}}>
              <IconLabelTabs />
            </Box>
            <Box className="room" sx={{backgroundColor:'white',  width:280,pt:2,mr:0.4}}>
            <Person2Outlined />
                1 Room, 1 Audit, 0 Children
            </Box>
            <Box className="special" sx={{backgroundColor:'white',color:'gray',  width:180,p:1.5,mr:0.4}}>
            <LocalOfferOutlined sx={{color:'black',alignItems:'initial',pr:1}} />
                Special Code
            </Box>
                <Button sx={{color:'white',backgroundColor:'#876a20',  width:100,p:1.5,ml:0.4}}>Search</Button>
        </Box>
    </>
  )
}
