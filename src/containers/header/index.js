// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import logo from '../../assets/atx_fabrications.png';

import './index.css';

class Header extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className="header">
        <header className="App-header">
          <AppBar>
            <Grid container direction="row" xs={12} alignItems="center">
              <Grid item align="start" xs={4}>
                <IconButton
                  color="black"
                  aria-label="Menu"
                  className="menu"
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleClose}>ATX Fabrication</MenuItem>
                </Menu>
              </Grid>
              <Grid item align="center" xs={4}>
                <img src={logo} className="App-logo" alt="logo" />
              </Grid>
              <Grid item align="end" xs={4}>
                <Button href="#about">
                  About
                </Button>
                <Button href="#services">
                  Services
                </Button>
                <Button href="#contact">
                  Contact
                </Button>
              </Grid>
            </Grid>
          </AppBar>
        </header>
        <section>
          <div className="large">
            <div className="title">
              <h1>ATX</h1>
              <h4>Construction</h4>
            </div>
          </div>
        </section>
        <section>

        </section>
      </div>
    )
  }
}

export default connect(null, null)(Header);
