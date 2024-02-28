import styled from '@emotion/styled'
import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material'
import Pets from '@mui/icons-material/Pets';
import React, { useState } from 'react'
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/NotificationAdd';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar) ({
    display:"flex",
    justifyContent:"space-between",
});

const Search = styled("div") (({ theme }) => ({
    backgroundColor: "white",
    padding:"0 10px",
    borderRadius:theme.shape.borderRadius,
    width:"40%",

}));

const Icons = styled(Box) (({ theme }) => ({
    display:'none',
    gap:"20px",
    alignItems:'center',
    [theme.breakpoints.up("sm")]:{
        display: "flex"
    }
}));

const UserBox = styled(Box)(({ theme}) =>({
    display:"flex",
    alignItems:"center",
    gap:"10px",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}))
const Navbar = () => {

    const [open, setOpen] = useState(false);
  return (
    <AppBar position='sticky'>
    <StyledToolbar>
        <Typography variant='h6' sx={{
            display:{xs:"none", sm:"block"}}}> Chat Book </Typography>
        <Pets sx={{
            display:{xs:"block", sm:"none"}}}/>
            <Search><InputBase placeholder='Search'/></Search>
            <Icons>
            <Badge badgeContent={4} color="error">
            <MailIcon />
            </Badge>

            <Badge badgeContent={2} color="error">
            <Notifications />
            </Badge>
            <Avatar  sx={{
                width:30,
                height: 30,
            }}src='https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg'
                onClick= {(e)=>setOpen(true)}/>
            </Icons>

            <UserBox onClick={(e) => setOpen(true)} >
            <Avatar  sx={{
                width:30,
                height: 30,
            }}src='https://cdn.pixabay.com/photo/2014/04/12/14/59/portrait-322470_1280.jpg' />
            </UserBox>
            <Typography variant="span"></Typography>
        </StyledToolbar>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
