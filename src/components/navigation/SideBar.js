import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalShipping from '@material-ui/icons/LocalShipping';
import Person from '@material-ui/icons/Person';
import Eject from '@material-ui/icons/Eject';
import Queue from '@material-ui/icons/Queue';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../store/actions/userActions';
import { connect } from 'react-redux';

const SideBar = props => {
	const logoutBtn = () => {
		props.logoutUser();
	};
	return (
		<div>
			<Link to="/account">
				<ListItem button>
					<ListItemIcon>
						<Person />
					</ListItemIcon>
					<ListItemText primary="Account" />
				</ListItem>
			</Link>
			<Link to="/products">
				<ListItem button>
					<ListItemIcon>
						<Queue />
					</ListItemIcon>
					<ListItemText primary="Products" />
				</ListItem>
			</Link>
			<Link to="/shipments">
				<ListItem button>
					<ListItemIcon>
						<LocalShipping />
					</ListItemIcon>
					<ListItemText primary="Shipments" />
				</ListItem>
			</Link>
			<Link to="/logout">
				<ListItem button>
					<ListItemIcon>
						<Eject onClick={logoutBtn} />
					</ListItemIcon>
					<ListItemText primary="Logout" />
				</ListItem>
			</Link>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		loggedOut: state.userReducer.isLoggedOut,
	};
};

export default connect(
	mapStateToProps,
	{ logoutUser },
)(SideBar);
