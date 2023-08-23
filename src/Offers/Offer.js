import { Typography } from '@mui/material'
import React from 'react'
import MediaCard from './MediaCard'

export default function Offer() {
  return (
    <>
        <Typography variant='h4' sx={{textAlign:'center',fontFamily:'monospace'}} >Offers</Typography>
        <MediaCard />
    </>
  )
}
