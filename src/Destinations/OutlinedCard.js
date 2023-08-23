import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const card = (
  <React.Fragment >
    <CardContent   >
      <Typography variant="h1" sx={{ fontSize: 24 , fontFamily:'"BodoniStd-BookItalic", serif',fontStyle:'italic',pb:4}} color="#77328b" align='left' gutterBottom>
      Cinnamon Dhonveli Maldives
      </Typography>
      <Typography variant="body2" align='left' >
      Feel an irrepressible wave of excitement as you have the best surfing experience, set to the backdrop of serenity, and pristine blue waters.
      </Typography>
    </CardContent>
    <CardActions>
    <Button variant="contained" sx={{fontFamily:'"BodoniStd-BookItalic", serif',fontStyle:'italic',backgroundColor:'rgb(52, 28, 111)',height:50}}>Discover More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box  sx={{ maxWidth: 275, pl:120 }}>
      <Card className="outlinedcard" variant="outlined">{card}</Card>
    </Box>
  );
}
