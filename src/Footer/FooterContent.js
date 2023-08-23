import {    ChevronRight, CircleRounded, Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function FooterContent() {
  return (
    <>
      <section className="footer-content">
          <div className='footer-section'>
            <h2>About</h2>
            <p>About cinnamon hotels & resorts</p>
            <p>Media & Accolads</p>
            <p>Gallery</p>
            <p>CSR & Susstainability</p>
            <p>Jhon Keels Group</p>
            <p>Cinnamon Air</p>
            <p>Nature Trails</p>
            <p>Cinnamon Box office</p>
            <p>terms & conditions</p>
            <p>privacy statement</p>
          </div>
          <div className='footer-section'>
            <h2>Get in Touch</h2>
            <p>know srilanka</p>
            <p>know maldives</p>
            <p style={{paddingBottom:70}}>contact us</p>
            <h2 >sections</h2>
            <p>careers</p>
            <p>blogs</p>
            <p>cinnamon affiliate programme</p>

          </div>
          <div className='footer-section' >
            <h2>Follow Us</h2>
            <div className='contact-icon'>
              <Facebook sx={{fontSize:40,color:'#aaa4a4'}} />
              <Twitter sx={{fontSize:40,color:'#aaa4a4'}}/>
              <LinkedIn sx={{fontSize:40,color:'#aaa4a4'}}/>
              <Instagram sx={{fontSize:40,color:'#aaa4a4'}}/>
              <YouTube sx={{fontSize:40,color:'#aaa4a4'}}/>
            </div>
            <h2 style={{paddingTop:70}}>Get cinnamon in your inbox</h2>
           <Box sx={{border:'1px solid gray',height:60}} >
              <ChevronRight sx={{display:'flex',pl:48,fontSize:50,cursor:'pointer',pt:1}} />
           </Box> 
           <div className='radiobtn'>
            <CircleRounded sx={{pt:4.2,pr:2,color:'#aaa4a4'}} />
            <Typography variant='p' sx={{mt:4,width:400,color:'#aaa4a4'}}>By checking this box I consent to the process of my personal data by cinnoman of the purpose and within the conditions set out in the form  and the <em style={{color:'black',fontSize:14}}>cinnamon data protection policy*</em> </Typography>
</div>            
          </div>
      </section>
    </>
  )
}
