import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Fade, Divider, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  root: {
    height: '10vh',
    width: '10vh',
  },
  menu: {
    backgroundColor: '#3f51b5',
    color: '#b8bbdd',
  },
  menuItem: {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    fontSize: '1.5rem',
  },
});

function TopNav () {
  const styleClass = useStyles();
  const [menuOpen, setMenuStatus] = useState(null);

  const openHandler = (event) => setMenuStatus(event.currentTarget);
  const closeHandler = () => setMenuStatus(null);

  return (
    <>
      <AppBar
        position="relative"
      >
        <Toolbar>
          <IconButton className={styleClass.root} onClick={openHandler}>
            <MenuIcon className={styleClass.root}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Menu
        classes={{paper: styleClass.menu}}
        transition={Fade}
        anchorEl={menuOpen}
        open={Boolean(menuOpen)}
        onClose={closeHandler}
      >
        <MenuItem onClick={closeHandler} classes={{root: styleClass.menuItem}}>
          <Link replace to='/' style={{textDecoration: 'none', color: '#b8bbdd'}}>
            <b>Calculator</b>
          </Link>
        </MenuItem>
        <Divider />
        <MenuItem onClick={closeHandler} classes={{root: styleClass.menuItem}}>
          <Link replace to='/about' style={{textDecoration: 'none', color: '#b8bbdd'}}>
            <b>About</b>
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
}

export default TopNav;
