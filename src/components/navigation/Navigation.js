import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import LoggedOutLinks from '../navigation/LoggedOutLinks';
import LoggedInLinks from '../navigation/LoggedInLinks';

const styles = {
	root: {
		flexGrow: 1,
	},
	grow: {
		flexGrow: 1,
	},
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
};

class Navigation extends React.Component {
	state = {
		auth: true,
		anchorEl: null,
	};

	handleChange = event => {
		this.setState({ auth: event.target.checked });
	};

	handleMenu = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleClose = () => {
		this.setState({ anchorEl: null });
	};

	render() {
		const { classes } = this.props;
		const { auth, anchorEl } = this.state;
		const open = Boolean(anchorEl);

		return (
			<div className={classes.root}>
				<AppBar position="sticky">
					<Toolbar>
						<Typography variant="h6" color="inherit" className={classes.grow}>
							ScannAR
						</Typography>
						{auth ? (
							// <LoggedInLinks />
							<div>
								<IconButton
									aria-owns={open ? 'menu-appbar' : undefined}
									aria-haspopup="true"
									onClick={this.handleMenu}
									color="inherit">
									<AccountCircle />
								</IconButton>
								<Menu
									id="menu-appbar"
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
									onClose={this.handleClose}>
									<MenuItem onClick={this.handleClose}>
										<NavLink
											style={{ textDecorationLine: 'none' }}
											to="/account">
											My account
										</NavLink>
									</MenuItem>
									<MenuItem onClick={this.handleClose}>
										<NavLink
											style={{ textDecorationLine: 'none' }}
											to="/products">
											Products
										</NavLink>
									</MenuItem>
									<MenuItem onClick={this.handleClose}>
										<NavLink
											style={{ textDecorationLine: 'none' }}
											to="/shipments">
											Shipments
										</NavLink>
									</MenuItem>
									<MenuItem onClick={this.handleClose}>
										<NavLink
											style={{ textDecorationLine: 'none' }}
											to="/packages">
											Packages
										</NavLink>
									</MenuItem>
									<MenuItem onClick={this.handleClose}>
										<NavLink
											style={{ textDecorationLine: 'none' }}
											to="/logout">
											Logout
										</NavLink>
									</MenuItem>
								</Menu>
							</div>
						) : (
							// <LoggedOutLinks />
							<div>
								<MenuItem onClick={this.handleClose}>
									<NavLink style={{ textDecorationLine: 'none' }} to="/login">
										Login
									</NavLink>
								</MenuItem>
								<MenuItem onClick={this.handleClose}>
									<NavLink style={{ textDecorationLine: 'none' }} to="/signup">
										Sign Up
									</NavLink>
								</MenuItem>
							</div>
						)}
					</Toolbar>
				</AppBar>
			</div>
		);
	}
}

Navigation.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
