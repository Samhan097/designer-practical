import React from 'react'
import MultipleSelectPlaceholder from './MultipleSelectPlaceholder'
import Overlay from './Overlay'

function Destination() {
  return (
    <>
        <div className='destination'>
        <h1 style={{fontFamily:'"BodoniStd-BookItalic", serif',color:'#77328b',fontSize:70,fontStyle:'italic',fontWeight:400}}  >Our Destinations</h1>
        <MultipleSelectPlaceholder />
        <Overlay />
        </div>
    </>
  )
}

export default Destination