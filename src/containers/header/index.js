// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';

import logo from '../../assets/atx_fabrications.png';

import './index.css';

type Props = {}

type State = {
  left: string,
  headerClass: string,
}

export class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      headerClass: 'transparent',
      left: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollFunction, true);
  }

  scrollFunction = () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      this.setState({ headerClass: "white"});
    } else {
      this.setState({ headerClass: "transparent"});
    }
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      left: open,
    });
  };

  render() {
    const { anchorEl, headerClass } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className="header">
        <header className={headerClass}>
          <Grid container direction="row" xs={12} alignItems="center">
            <Grid item align="start" xs={4}>
              <IconButton
                color="black"
                aria-label="Menu"
                className="menu"
                aria-haspopup="true"
                onClick={this.toggleDrawer('left', true)}
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
        </header>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <div>
              <List>ATX Fabrications</List>
            </div>
          </div>
        </Drawer>
        <section>
          <div className="large" />
        </section>
        <section>

        </section>
      </div>
    )
  }
}

export default connect(null, null)(Header);
