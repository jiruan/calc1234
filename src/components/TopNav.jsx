import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
// import { IconButton } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';

function TopNav () {
    return (
      <AppBar
        position="relative"
      >
        <Toolbar>
          {/**
          <IconButton style={{height: 50, width: 50}}>
            <MenuIcon style={{height: 50, width: 50}} />
          </IconButton>
          */}
        </Toolbar>
      </AppBar>
    );
}

export default TopNav;
