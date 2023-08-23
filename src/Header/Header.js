import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Image } from 'mui-image'
import { Language, PersonOutline, Smartphone } from '@mui/icons-material';
import '../App.css'

const pages = ['Sign In', 'Join Now', 'Find Reservations','English','LKR'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
export default function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  
  return (
    <AppBar  position="static" sx={{backgroundColor:'white', color:'black', px:'100px'}}>
      <Container maxWidth="xl" className='header' sx={{textTransform:'lowercase'}}>
        <Toolbar disableGutters >
          <Image 
            href="/"
            sx={{
              display:{xs:'none',md:'flex'},
              maxWidth:200,
              maxHeight:100
            }} src="https://s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png" alt="Shangr-la" />
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          <Image 
            href="/"
            sx={{
              display:{xs:'flex',md:'none'},
              maxWidth:200,
              maxHeight:100
            }} src="https://s.shangri-la.com/sl-fe-hotel-prod/img/shangrila_en2021.a24c901.png" alt="shangrila" />
       
          <Box sx={{ display: { xs: 'none', md: 'flex' } }} >
            <PersonOutline sx={{pt:0.6,m:0}} />
            <Button
                onClick={handleCloseNavMenu}
                sx={{ "&:hover": {backgroundColor: "transparent"}, color: 'black', display: 'block',minWidth:80,textTransform:'capitalize'}}
              >
                Sign In 
              </Button>
              <Typography sx={{display: 'block',pt:0.6}}>|</Typography>
              
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ "&:hover": {backgroundColor: "transparent"}, color: 'black', display: 'block',minWidth:90,textTransform:'capitalize'}}
              >
                Join Now 
              </Button>
              <Typography sx={{display: 'block',pt:0.6}}>|</Typography>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{"&:hover": {backgroundColor: "transparent"},  color: 'black', display: 'block',minWidth:170,textTransform:'capitalize'}}
              >
                Find Reservations
              </Button>
              <Typography sx={{display: 'block',pt:0.6}}>|</Typography>

              <Language sx={{pt:0.6,pl:1}} />
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{"&:hover": {backgroundColor: "transparent"},  color: 'black', display: 'block',minWidth:70,textTransform:'capitalize'}}
              >
                English
              </Button>
              <Typography sx={{display: 'block',pt:0.6}}>|</Typography>
              <Button
                
                onClick={handleCloseNavMenu}
                sx={{ "&:hover": {backgroundColor: "transparent"}, color: 'black', display: 'block',minWidth:40,textTransform:'capitalize',fontFamily:'"Roboto","Helvetica","Arial",sans-serif'}}
              >
                LKR 
              </Button>
              <Typography sx={{display: 'block',pt:0.6}}>|</Typography>

              <Smartphone sx={{pt:0.6,pl:1}}  />
          </Box> 
 
          <Box>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
