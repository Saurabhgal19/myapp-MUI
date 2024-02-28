import { Box, Switch } from '@mui/material'
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemButton from '@mui/material/ListItemButton';
import {AccountBox, Article, Group, Home, ModeNight, Person, Storefront} from "@mui/icons-material";
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{display:{xs:"none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#home">
                <Home/>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#simple-list">
                <Article/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#simple-list">
                <Person/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#simple-list">
                <Group/>
              </ListItemIcon>
              <ListItemText primary="Group" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#simple-list">
                <Storefront/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#simple-list">
                <SettingsIcon/>
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#simple-list">
                <AccountBox/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

          {/* Dark Mode */}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component="a" href="#simple-list">
                <ModeNight/>
              </ListItemIcon>
                <Switch/>
            </ListItemButton>
          </ListItem>
        </List>
        </Box>
    </Box>
  )
}

export default Sidebar
