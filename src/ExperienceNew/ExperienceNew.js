import { Typography } from '@mui/material'
import React from 'react'
import ImageHilton from './ImageHilton'

export default function ExperienceNew() {
  return (
    <>
        <div className='experience'>
        <Typography variant='h5' sx={{textTransform:"capitalize",fontWeight:700,color:'rgb(16,76,151)',pt:8}} >Expereience somthing new</Typography>
        <Typography variant='p' >close to home or across the world, Hilton is there for you with memorable offers and experience. Check out what's new. </Typography>
        <ImageHilton />
        </div>
    </>
  )
}
